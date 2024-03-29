import type { Metadata } from 'next'
import { Inter, PT_Sans_Caption } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const ptCatopion = PT_Sans_Caption({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={ptCatopion.className}>{children}</body>
		</html>
	)
}
