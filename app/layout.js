import './globals.css';
import Providers from '../components/Providers';

export const metadata = {
  title: 'Next Firebase Auth',
  description: 'App using Firebase Authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
