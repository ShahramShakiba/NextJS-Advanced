import '@/assets/styles/globals.css';
// import { metadata } from './layout';

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
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
