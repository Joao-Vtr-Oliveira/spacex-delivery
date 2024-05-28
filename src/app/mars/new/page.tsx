import AddNewMarsLocationPage from '@/pagesComponents/AddNewMarsLocationPage';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';


export const metadata: Metadata = {
	title: 'Add Mars Location',
};

export default function AddMarsLocation() {

	return (
		<Box className='flex min-h-screen h-screen w-screen flex-col items-center justify-center p-24'>
      <AddNewMarsLocationPage />
		</Box>
	);
}
