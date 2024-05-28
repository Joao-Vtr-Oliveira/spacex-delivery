import HomePage from '@/pagesComponents/homePage';
import { Box, Button, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { Metadata } from 'next';


export const metadata: Metadata = {
	title: 'Home Page',
};

export default function Home() {

	return (
		<Box className='flex min-h-screen h-screen w-screen flex-col items-center justify-center p-24'>
      <HomePage />
		</Box>
	);
}
