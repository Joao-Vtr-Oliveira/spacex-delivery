'use client';

import { EarthContext } from '@/contexts/earthContext';
import { MarsContext } from '@/contexts/marsContext';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Text,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';

const HomePage = () => {
	const [page, setPage] = useState(true);
	// true -> Earth

	const marsContext = useContext(MarsContext);
	const earthContext = useContext(EarthContext);

	if (!marsContext || !earthContext) {
		throw new Error('An error ocorred.');
	}

	return (
		<Card w={['100%', '100%', '100%', '80%', '90%', '60%']} h={['100%', '90%']}>
			<CardHeader textAlign='center'>
				<Heading fontFamily='monospace'>Address list</Heading>
				<hr />
			</CardHeader>
			<CardBody>
				<Box display='flex' justifyContent='center' gap={2}>
					<Button
						isDisabled={page}
						colorScheme='green'
						onClick={() => setPage(!page)}
					>
						Earth
					</Button>
					<Button
						isDisabled={!page}
						colorScheme='orange'
						onClick={() => setPage(!page)}
					>
						Mars
					</Button>
				</Box>
				<Heading textAlign='center' mt={5} mb={5} size={'lg'}>
					<Box as='span' textDecoration='underline' textColor={page ? 'green' : 'orange'}>
						{page ? 'Earth' : 'Mars'}
					</Box>{' '}
					List
				</Heading>
				{page && (
					<Box
						display='flex'
						flexDir='column'
						alignItems='center'
						overflow='auto'
					>
						{earthContext.locations.map((location, index) => (
							<Box
								h='100%'
								w='50%'
								border='2px'
								borderRadius='5px'
								mb={10}
								borderColor='#542BF0'
								key={index}
							>
								<Text
									textAlign='center'
									as='p'
									fontSize='xl'
									fontWeight='bold'
									fontStyle='italic'
								>
									{location.name}
								</Text>
								<Text textAlign='center' as='p' fontWeight='bold'>
									{location.zipCode}
								</Text>
								<Text
									textAlign='center'
									as='p'
									fontSize='sm'
									fontWeight='bold'
									textColor='lightgray'
								>
									{location.addressLine}, {location.city} {location.state} -{' '}
									{location.country}
								</Text>
								<Box
									display='flex'
									justifyContent='center'
									mt='5'
									mb='5'
									gap={2}
								>
									<Button
										size={'sm'}
										colorScheme='red'
										onClick={() => earthContext.deleteLocation(index)}
									>
										Delete
									</Button>
									<Button size={'sm'} colorScheme='yellow' color='white'>
										Edit
									</Button>
								</Box>
							</Box>
						))}
					</Box>
				)}
				{!page && (
					<Box
						display='flex'
						flexDir='column'
						alignItems='center'
						overflow='auto'
					>
						{marsContext.locations.map((location, index) => (
							<Box
								h='100%'
								w='50%'
								border='2px'
								borderRadius='5px'
								mb={10}
								borderColor='#542BF0'
								key={index}
							>
								<Text
									textAlign='center'
									as='p'
									fontSize='xl'
									fontWeight='bold'
									fontStyle='italic'
								>
									{location.name}
								</Text>
								<Text textAlign='center' as='p' fontWeight='bold'>
									{location.code}
								</Text>
								<Box
									display='flex'
									justifyContent='center'
									mt='5'
									mb='5'
									gap={2}
								>
									<Button
										size={'sm'}
										colorScheme='red'
										onClick={() => marsContext.deleteLocation(index)}
									>
										Delete
									</Button>
									<Button size={'sm'} colorScheme='yellow' color='white'>
										Edit
									</Button>
								</Box>
							</Box>
						))}
					</Box>
				)}
			</CardBody>
		</Card>
	);
};

export default HomePage;