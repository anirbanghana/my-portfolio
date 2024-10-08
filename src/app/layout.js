// layout.js
import GlobalStyle from './globalStyles';
import Navbar from './Navbar';
import Footer from './Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'A modern portfolio built with Next.js and styled-components',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
