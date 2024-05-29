'use client';

import { EarthContext } from '@/contexts/earthContext';
import { MarsContext } from '@/contexts/marsContext';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

const HomePage = () => {
	const [page, setPage] = useState(true);
	// true -> Earth

	const marsContext = useContext(MarsContext);
	const earthContext = useContext(EarthContext);
	const { push } = useRouter();

	if (!marsContext || !earthContext) {
		throw new Error('An error ocorred.');
	}

	return (
		<Card w={['100%', '100%', '100%', '80%', '90%', '60%']} h={['100%', '90%']}>
			<CardHeader textAlign='center'>
				<Heading fontFamily='monospace'>Address list</Heading>
				<Box display='flex' justifyContent='center' mb={5} gap={2}>
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
				<hr />
			</CardHeader>
			<CardBody overflow='auto'>
				<Heading textAlign='center' mt={5} mb={5} size={'lg'}>
					<Box
						as='span'
						textDecoration='underline'
						textColor={page ? 'green' : 'orange'}
					>
						{page ? 'Earth' : 'Mars'}
					</Box>{' '}
					List
				</Heading>
				{page && (
					<Box
						display='flex'
						flexDir='column'
						alignItems='center'
						className='border border-red'
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
									<Button size={'sm'} colorScheme='yellow' color='white' onClick={() => push(`/earth/edit/${location.id}`)}>
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
									<Button size={'sm'} colorScheme='yellow' color='white' onClick={() => push(`/mars/edit/${location.id}`)}>
										Edit
									</Button>
								</Box>
							</Box>
						))}
					</Box>
				)}
			</CardBody>
			<CardFooter display='flex' justifyContent='end'>
				<Button
					colorScheme='purple'
					onClick={page ? () => push('/earth/new') : () => push('/mars/new')}
				>
					Add new {page ? 'Earth' : 'Mars'} location
				</Button>
			</CardFooter>
		</Card>
	);
};

export default HomePage;
