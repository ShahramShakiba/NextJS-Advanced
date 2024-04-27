import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Property Cloud',
  description:
    'This platform will allow users to both list their rental properties and search for rental properties with ease and efficiency.',
  author: 'Shahram Shakiba',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
