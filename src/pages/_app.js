import '../css/main.css';
import { Playfair_Display, Sansation } from 'next/font/google';

// Define fonts and expose CSS variables
const heading = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const body = Sansation({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  // Attach the variables at the root so Tailwind can use them
  return (
    <div className={`${body.variable} ${heading.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
