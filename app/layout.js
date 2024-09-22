import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Pilih bobot yang diinginkan
});

export const metadata = {
  title: 'Agatha App',
  description: 'Landing page Agatha',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen bg-white`}>
        <main>{children}</main>
      </body>
    </html>
  );
}