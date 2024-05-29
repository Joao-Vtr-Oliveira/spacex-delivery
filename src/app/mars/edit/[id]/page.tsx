import EditMarsLocationPage from '@/pagesComponents/EditMarsLocation';
import { PageParams } from '@/types/pageParams';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Edit Mars Location',
};

export default function AddEarthLocation({ params }: PageParams) {
	return (
		<Box className='flex min-h-screen h-screen w-screen flex-col items-center justify-center p-24'>
			<EditMarsLocationPage params={params} />
		</Box>
	);
}
