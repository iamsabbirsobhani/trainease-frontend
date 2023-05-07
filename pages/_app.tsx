import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/app/globals.css';
import { Provider } from 'react-redux';
import store from '@/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
