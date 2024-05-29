'use client';
import { MarsContext } from '@/contexts/marsContext';
import { marsLocationType } from '@/types/marsLocationType';
import { checkMarsFields } from '@/utils/checkFields';
import { marsLocationBase } from '@/utils/marsLocationBase';
import toastHelper from '@/utils/toastHelper';
import { Box, Button, Heading, Input, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

const AddNewMarsLocationPage = () => {
	const [location, setLocation] = useState<marsLocationType>(marsLocationBase);

	const { push } = useRouter();
	const marsContext = useContext(MarsContext);

	const toast = useToast();

	const addLocation = () => {
		const check = checkMarsFields(location);
		if (!check) return toast(toastHelper('blankFields'));
		if(location.code.length !== 4) return toast(toastHelper('wrongCode'));
		marsContext?.addLocation(location);
		toast(toastHelper('added'));
		push('/');
	};

	return (
		<Box>
			<Heading textAlign='center' mb={10}>
				New Mars Location:
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
				<Button colorScheme='green' isDisabled={!checkMarsFields(location)} onClick={addLocation}>
					Add Location
				</Button>
				<Button colorScheme='red' onClick={() => push('/')}>
					Cancel
				</Button>
			</Box>
		</Box>
	);
};

export default AddNewMarsLocationPage;
