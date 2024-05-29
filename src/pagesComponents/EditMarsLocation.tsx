'use client';
import { MarsContext } from '@/contexts/marsContext';
import { marsLocationType } from '@/types/marsLocationType';
import { PageParams } from '@/types/pageParams';
import { checkMarsFields } from '@/utils/checkFields';
import { marsLocationBase } from '@/utils/marsLocationBase';
import { Box, Button, Heading, Input } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

const EditMarsLocationPage = ({ params }: PageParams) => {
	const { push } = useRouter();
	const marsContext = useContext(MarsContext);

	if (!marsContext) return 'error';

	const actualLocation = marsContext.locations.filter(
		(item) => item.id === Number(params.id)
	)[0];

	const [location, setLocation] = useState<marsLocationType>(actualLocation);

	const addLocation = () => {
		const check = checkMarsFields(location);
		if (!check) return alert('Please, fill all the fields');
		if (location.code.length !== 4) return alert('The code must have 4 chars.');
		marsContext.updateLocation(location.id, location);
		push('/');
	};

	return (
		<Box>
			<Heading textAlign='center' mb={10}>
				Edit Mars Location:
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
					Code
				</Heading>
				<Input
					value={location.code}
					textAlign='center'
					onChange={(e) => setLocation({ ...location, code: e.target.value })}
					required
				/>
			</Box>
			<Box display='flex' justifyContent='center' gap={3}>
				<Button
					colorScheme='green'
					isDisabled={!checkMarsFields(location)}
					onClick={addLocation}
				>
					Add Location
				</Button>
				<Button colorScheme='red' onClick={() => push('/')}>
					Cancel
				</Button>
			</Box>
		</Box>
	);
};

export default EditMarsLocationPage;
