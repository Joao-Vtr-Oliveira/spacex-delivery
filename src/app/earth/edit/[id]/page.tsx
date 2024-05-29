
import EditEarthLocationPage from '@/pagesComponents/EditEarthLocationPage';
import { PageParams } from '@/types/pageParams';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Edit Earth Location',
};

export default function AddEarthLocation({ params }: PageParams) {
	return (
		<Box className='flex min-h-screen h-screen w-screen flex-col items-center justify-center'>
			<EditEarthLocationPage params={params} />
		</Box>
	);
}
