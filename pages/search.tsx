import { Inter } from 'next/font/google';
import { DestinationForm } from '@/components/Home/DestinationForm';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Search Tickets | TrainEase - Book Train Tickets Online</title>
        <meta
          name="description"
          content="Book train tickets online with TrainEase - the easiest and fastest way to buy train tickets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@trainease" />
        <meta
          name="twitter:title"
          content="TrainEase - Book Train Tickets Online"
        />
        <meta
          name="twitter:description"
          content="Book train tickets online with TrainEase - the easiest and fastest way to buy train tickets."
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrainease-thumb-2.png?alt=media&token=b60a23e1-1994-4283-9ba3-a0f738e685c1"
        />

        {/* add favicon */}
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrain.png?alt=media&token=e17af032-0d0a-4020-b6b3-23a16bdcf810"
        />
        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="TrainEase - Book Train Tickets Online"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://trainease-frontend.vercel.app/"
        />
        <meta
          property="og:description"
          content="Book train tickets online with TrainEase - the easiest and fastest way to buy train tickets."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrainease-thumb-2.png?alt=media&token=b60a23e1-1994-4283-9ba3-a0f738e685c1"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image:type" content="image/png" />
      </Head>

      <main className="">
        <DestinationForm />
      </main>
    </>
  );
}
