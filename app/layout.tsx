import './globals.css';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { Providers } from './providers';

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Providers>
            {children}
          </Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
