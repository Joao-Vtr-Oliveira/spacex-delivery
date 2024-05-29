'use client';

import { EarthContext } from '@/contexts/earthContext';
import { earthLocationType } from '@/types/earthLocationType';
import { PageParams } from '@/types/pageParams';
import { checkEarthFields } from '@/utils/checkFields';
import toastHelper from '@/utils/toastHelper';
import { Box, Button, Heading, Input, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

const EditEarthLocationPage = ({ params }: PageParams) => {
	const earthContext = useContext(EarthContext);

	if (!earthContext) return 'Error';

	const actualLocation = earthContext.locations.filter(
		(item) => item.id === Number(params.id)
	)[0];
	
	const toast = useToast();

	const [location, setLocation] = useState<earthLocationType>(actualLocation);

	const { push } = useRouter();

	const updateLocation = () => {
		const check = checkEarthFields(location);
		if (!check) return toast(toastHelper('blankFields'));
		earthContext.updateLocation(location.id, location);
		toast(toastHelper('updated'));
		push('/');
	};

	return (
		<Box>
			<Heading textAlign='center' mb={10}>
				Edit Earth Location:
			</Heading>
			<Box mb={5}>
				<Heading textAlign='center' mb={3} size='md'>
					Name
				</Heading>
				<Input
					value={location.name}
					textAlign='center'
					onChange={(e) => setLocation({ ...location, name: e.target.value })}
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
					onChange={(e) => setLocation({ ...location, state: e.target.value })}
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
					onChange={(e) => setLocation({ ...location, city: e.target.value })}
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
			<Box display='flex' justifyContent='center' gap={3}>
				<Button
					colorScheme='green'
					isDisabled={!checkEarthFields(location)}
					onClick={updateLocation}
				>
					Update Location
				</Button>
				<Button colorScheme='red' onClick={() => push('/')}>
					Cancel
				</Button>
			</Box>
		</Box>
	);
};

export default EditEarthLocationPage;
