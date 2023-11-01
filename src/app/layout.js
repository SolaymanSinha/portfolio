import GoogleAnalytics from '../components/GoogleAnalytics';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Best Web Developer in Bangladesh: Top Rated',
	description:
		"Unleash Web Magic 🪄 | Elevate User Experience with Expertly Crafted Websites! 🔮 | Your Gateway to Stunning, High-Performance Web Solutions 🌟 | Let's Build Something Extraordinary Together! 💡✨",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className='scroll-smooth'>
			<body className={inter.className}>
				{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} /> : null}
				{children}
			</body>
		</html>
	);
}
