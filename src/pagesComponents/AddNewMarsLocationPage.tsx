'use client';
import { MarsContext } from '@/contexts/marsContext';
import { marsLocationType } from '@/types/marsLocationType';
import { checkMarsFields } from '@/utils/checkFields';
import { checkCode } from '@/utils/checkInfo';
import { marsLocationBase } from '@/utils/marsLocationBase';
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

const AddNewMarsLocationPage = () => {
	const [location, setLocation] = useState<marsLocationType>(marsLocationBase);

	const { push } = useRouter();
	const marsContext = useContext(MarsContext);
	if(!marsContext) return 'error';

	const toast = useToast();

	const addLocation = () => {
		const check = checkMarsFields(location);
		if (!check) return toast(toastHelper('blankFields'));
		if (location.code.length !== 4) return toast(toastHelper('wrongCode'));
		if(checkCode(marsContext?.locations, location.code)) return toast(toastHelper('codeInUse'));
		marsContext?.addLocation(location);
		toast(toastHelper('added'));
		push('/');
	};

	return (
		<Card w={['100vw', '70vw', '60%', '50%', '40%']} h={['60vh', '50%']}>
			<Box>
				<CardHeader>
					<Heading textAlign='center' fontFamily='monospace' mb={10}>
						New Mars Location:
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
							Code
						</Heading>
						<Input
							value={location.code}
							textAlign='center'
							onChange={(e) =>
								setLocation({ ...location, code: e.target.value })
							}
							required
						/>
					</Box>
				</CardBody>
				<CardFooter display='flex' justifyContent='center'>
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
				</CardFooter>
			</Box>
		</Card>
	);
};

export default AddNewMarsLocationPage;
