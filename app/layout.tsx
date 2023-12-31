import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from './components';
import RegisterModal from './components/Modals/RegisterModal';
import LoginModal from './components/Modals/LoginModal';
import RentModal from './components/Modals/RentModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';
import SearchModal from './components/Modals/SearchModal';

export const metadata = {
  title: 'Travel Booking',
  description: 'Travel Booking App',
  icons: '/images/favicon.svg',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>

        <div className="pb-20 pt-20">{children}</div>
      </body>
    </html>
  );
}
