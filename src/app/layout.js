// layout.js
import '../../styles/global.css'; 
import Navbar from './Navbar';
import Footer from './Footer';

export const metadata = {
  title: 'AG Portfolio',
  description: 'A modern portfolio built with Next.js and styled-components',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
