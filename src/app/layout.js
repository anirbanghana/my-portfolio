// layout.js
import GlobalStyle from './globalStyles';
import Navbar from './Navbar'; // Adjust the path if needed

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
      </body>
    </html>
  );
}
