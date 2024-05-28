'use client';

import { EarthContext } from '@/contexts/earthContext';
import { MarsContext } from '@/contexts/marsContext';
import { Box, Button, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { useContext } from 'react';

export default function Home() {
	const marsContext = useContext(MarsContext);
	const earthContext = useContext(EarthContext);

	if (!marsContext || !earthContext) {
		throw new Error('useMarsContext must be used within a MarsProvider. Or error in earthContext.');
	}


	console.log(marsContext.locations);
	console.log(earthContext.locations);

	return (
		<Box>
			<Card>
				<CardHeader>
					<h1>Hello Mars!</h1>
				</CardHeader>
				<CardBody>
					<ul>
						{marsContext.locations.map((location, index) => (
							<li key={index}>
								Name: {location.name}, Code: {location.code}
								<Button size={'sm'} onClick={() => marsContext.deleteLocation(index)}>
									Delete
								</Button>
							</li>
						))}
					</ul>
					<Button size={'sm'} onClick={() => marsContext.addLocation({name: 'Location name', code: 'NEW-LOCATION'})}>
						Add New Location
					</Button>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<h1>Hello Earth!</h1>
				</CardHeader>
				<CardBody>
					<ul>
						{earthContext.locations.map((location, index) => (
							<li key={index}>
								Name: {location.name}, Address: {location.addressLine}
								<Button size={'sm'} onClick={() => earthContext.deleteLocation(index)}>Delete</Button>
							</li>
						))}
					</ul>
					<Button
            size={'sm'}
						onClick={() =>
							earthContext.addLocation({
                name: 'Location name',
								country: 'New Country',
								addressLine: 'New Address',
								city: 'New City',
								state: 'New State',
								zipCode: 'New Zip',
							})
						}
					>
						Add New Location
					</Button>
				</CardBody>
			</Card>
		</Box>
	);
}
