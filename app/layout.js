import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Pilih bobot yang diinginkan
});

export const metadata = {
  title: 'Agatha App',
  description: 'Landing page Agatha',
  icons: {
    icon: '/Agatha_Icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Agatha_Icon.png" />
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="/Agatha_Icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Agatha_Icon.png" />
      </head>
      <body className={`${poppins.className} min-h-screen  bg-[#0A0313]`}>
        <main>{children}</main>
      </body>
    </html>
  );
}