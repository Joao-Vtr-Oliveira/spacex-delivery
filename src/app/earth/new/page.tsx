
import AddNewEarthLocationPage from '@/pagesComponents/AddNewEarthLocationPage';
import { Box, Button, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { Metadata } from 'next';


export const metadata: Metadata = {
	title: 'Add Earth Location',
};

export default function AddEarthLocation() {

	return (
		<Box className='flex min-h-screen h-screen w-screen flex-col items-center justify-center p-24'>
      <AddNewEarthLocationPage />
		</Box>
	);
}
