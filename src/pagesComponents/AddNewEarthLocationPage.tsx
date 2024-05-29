'use client';

import { EarthContext } from '@/contexts/earthContext';
import { earthLocationType } from '@/types/earthLocationType';
import { checkEarthFields } from '@/utils/checkFields';
import { earthLocationBase } from '@/utils/earthLocationBase';
import toastHelper from '@/utils/toastHelper';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Input,
	useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

const AddNewEarthLocationPage = () => {
	const [location, setLocation] =
		useState<earthLocationType>(earthLocationBase);

	const toast = useToast();

	const { push } = useRouter();
	const earthContext = useContext(EarthContext);

	const addLocation = () => {
		const check = checkEarthFields(location);
		if (!check) return toast(toastHelper('blankFields'));
		earthContext?.addLocation(location);
		toast(toastHelper('added'));
		push('/');
	};

	return (
		<Card w={['100vw', '70vw', '60%', '50%', '40%']} h={['100vh', '90%']}>
			<Box>
				<CardHeader>
					<Heading textAlign='center' fontFamily='monospace' mb={10}>
						New Earth Location:
					</Heading>
				</CardHeader>
				<CardBody>
					<Box mb={5}>
						<Heading textAlign='center' mb={3} size='md'>
							Name
						</Heading>
						<Input
							value={location.name}
							textAlign='center'
							onChange={(e) =>
								setLocation({ ...location, name: e.target.value })
							}
							required
						/>
					</Box>
					<Box mb={5}>
						<Heading textAlign='center' mb={3} size='md'>
							Address line
						</Heading>
						<Input
							value={location.addressLine}
							textAlign='center'
							onChange={(e) =>
								setLocation({ ...location, addressLine: e.target.value })
							}
							required
						/>
					</Box>
					<Box mb={5}>
						<Heading textAlign='center' mb={3} size='md'>
							Country
						</Heading>
						<Input
							value={location.country}
							textAlign='center'
							onChange={(e) =>
								setLocation({ ...location, country: e.target.value })
							}
							required
						/>
					</Box>
					<Box mb={5}>
						<Heading textAlign='center' mb={3} size='md'>
							State
						</Heading>
						<Input
							value={location.state}
							textAlign='center'
							onChange={(e) =>
								setLocation({ ...location, state: e.target.value })
							}
							required
						/>
					</Box>
					<Box mb={5}>
						<Heading textAlign='center' mb={3} size='md'>
							City
						</Heading>
						<Input
							value={location.city}
							textAlign='center'
							onChange={(e) =>
								setLocation({ ...location, city: e.target.value })
							}
							required
						/>
					</Box>
					<Box mb={5}>
						<Heading textAlign='center' mb={3} size='md'>
							Zip Code
						</Heading>
						<Input
							value={location.zipCode}
							textAlign='center'
							onChange={(e) =>
								setLocation({ ...location, zipCode: e.target.value })
							}
							required
						/>
					</Box>
				</CardBody>
				<CardFooter display='flex' justifyContent='center'>
					<Box display='flex' gap={3}>
						<Button
							colorScheme='green'
							isDisabled={!checkEarthFields(location)}
							onClick={addLocation}
						>
							Add Location
						</Button>
						<Button colorScheme='red' onClick={() => push('/')}>
							Cancel
						</Button>
					</Box>
				</CardFooter>
			</Box>
		</Card>
	);
};

export default AddNewEarthLocationPage;
