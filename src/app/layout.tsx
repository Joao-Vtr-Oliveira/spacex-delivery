import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { EarthProvider } from '@/contexts/earthContext';
import { MarsProvider } from '@/contexts/marsContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<EarthProvider>
					<MarsProvider>
						<Providers>{children}</Providers>
					</MarsProvider>
				</EarthProvider>
			</body>
		</html>
	);
}
