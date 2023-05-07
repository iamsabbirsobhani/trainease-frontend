import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TrainEase - Book Train Tickets Online</title>
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

      <main className=" ">
        <div className="max-w-5xl flex justify-between m-auto mt-10">
          <div className="home-text w-1/2">
            <h1 className=" text-5xl">Plan Your Next Train Journey</h1>
            <p className="text-2xl">
              <span>Search for Routes&nbsp;</span>
              <span>Check Availability and Book Your Tickets Online</span>
            </p>
            <Link href="/search"> Search Ticket</Link>
          </div>
          <div className="home-bg w-1/2">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrain-bg.jpg?alt=media&token=35f96e04-32bc-48c6-917c-16e1c05d420f"
              alt="Picture of the author"
              width={500}
              height={500}
              className=" rounded-md"
              blurDataURL="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrain-bg.jpg?alt=media&token=35f96e04-32bc-48c6-917c-16e1c05d420f"
            />
          </div>
        </div>
      </main>
    </>
  );
}
