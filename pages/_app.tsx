import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/app/globals.css';
import { Provider } from 'react-redux';
import store from '@/store';
import { Montserrat } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
