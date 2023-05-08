import { Inter } from 'next/font/google';
import { DestinationForm } from '@/components/Home/DestinationForm';
import Head from 'next/head';
import Image from 'next/image';

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

      <main className=" max-w-7xl m-auto">
        <div className="flex justify-center items-center">
          <DestinationForm />

          <div className="">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Fhome-banner-campaign-10-04-2023.webp?alt=media&token=a81bc25e-1392-410e-af7c-6dd509561d27"
              alt="Picture of the author"
              width={500}
              height={500}
              className=" relative left-5 grayscale-100 rounded-md"
              blurDataURL="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrainease-logo_1.png?alt=media&token=a921799d-ad95-4956-ace5-d5baba9591c4"
            />
          </div>
        </div>

        <div className="flex mt-24 mb-24 justify-center items-center">
          <div className=" m-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Fezgif-3-ab975e9dfd.png?alt=media&token=24cb3a29-a571-4332-ab14-c24f84573f2f"
              alt="Picture of the author"
              width={200}
              height={200}
              className=" relative left-5 grayscale-100 rounded-md m-auto mt-5 mb-5"
              blurDataURL="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Fsearch.svg?alt=media&token=8070c2df-4bbc-4661-a77a-d6935b147289"
            />
            <div>
              <h1 className=" font-bold text-center text-2xl">Search</h1>
              <p className="  text-center text-lg">
                Choose your origin, destination, journey dates and search for
                trains
              </p>
            </div>
          </div>
          <div className=" m-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Fselect.png?alt=media&token=8c6b3c29-df4c-4704-bd5c-972635f28773"
              alt="Picture of the author"
              width={200}
              height={200}
              className=" relative left-5 grayscale-100 rounded-md m-auto mt-5 mb-5"
              blurDataURL="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Fselect.png?alt=media&token=8c6b3c29-df4c-4704-bd5c-972635f28773"
            />
            <div>
              <h1 className=" font-bold text-center text-2xl">Search</h1>
              <p className="  text-center text-lg">
                Select your desired trip and choose your seats
              </p>
            </div>
          </div>
          <div className=" m-4">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Fpay.png?alt=media&token=74b5b1ab-7b2b-46e2-90ab-051e4bf66af0"
              alt="Picture of the author"
              width={200}
              height={200}
              priority={true}
              className=" relative left-5 grayscale-100 rounded-md m-auto mt-5 mb-5"
              blurDataURL="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Fpay.png?alt=media&token=74b5b1ab-7b2b-46e2-90ab-051e4bf66af0"
            />
            <div>
              <h1 className=" font-bold text-center text-2xl">Pay</h1>
              <p className="  text-center text-lg">
                Pay for the tickets via Debit / Credit Cards or MFS
              </p>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <div className="w-2/5">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Finstruction-secion-image.png?alt=media&token=9ca4f89a-7638-449d-a814-bac52e1200b9"
              alt="Picture of the author"
              width={450}
              height={450}
              priority={true}
              className=" relative left-5 grayscale-100 rounded-md"
              blurDataURL="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Finstruction-secion-image.png?alt=media&token=9ca4f89a-7638-449d-a814-bac52e1200b9"
            />
          </div>

          <div className=" w-3/5 mt-24 mb-24">
            <h1 className=" text-4xl font-bold text-green-700">
              Instructions to Purchase Tickets
            </h1>
            <ul>
              <li className="flex mt-5">
                <div className=" m-4 rounded-full bg-green-700 text-white font-bold w-[32px] h-[32px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
                <p
                  style={{ flex: 1, flexBasis: '80%' }}
                  className=" w-40 font-semibold text-green-900 "
                >
                  You can pay for the tickets using mobile financial services:
                  bKash, Nagad, Rocket or debit/credit cards: Mastercard, Visa,
                  DBBL Nexus. Other payment options will be available soon.
                </p>
              </li>
              <li className="flex mt-5">
                <div className=" m-4 rounded-full bg-green-700 text-white font-bold w-[32px] h-[32px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
                <p
                  style={{ flex: 1, flexBasis: '80%' }}
                  className=" w-40 font-semibold text-green-900 "
                >
                  In case of payment or transaction failure, the deducted amount
                  would be refunded by your bank or MFS provider within 8
                  business days.
                </p>
              </li>
              <li className="flex mt-5">
                <div className=" m-4 rounded-full bg-green-700 text-white font-bold w-[32px] h-[32px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
                <p
                  style={{ flex: 1, flexBasis: '80%' }}
                  className=" w-40 font-semibold text-green-900 "
                >
                  In case money has been deducted from your card / mobile wallet
                  but you have not received a ticket confirmation, the deducted
                  amount would be refunded by your bank or MFS provider within 8
                  business days.
                </p>
              </li>
              <li className="flex mt-5">
                <div className=" m-4 rounded-full bg-green-700 text-white font-bold w-[32px] h-[32px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
                <p
                  style={{ flex: 1, flexBasis: '80%' }}
                  className=" w-40 font-semibold text-green-900 "
                >
                  If you have not received your ticket copy in email, kindly
                  check your Spam / Junk folder. You can also download your
                  ticket copy from the purchase history of your account after
                  you login.
                </p>
              </li>
              <li className="flex mt-5">
                <div className=" m-4 rounded-full bg-green-700 text-white font-bold w-[32px] h-[32px] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>

                <p
                  style={{ flex: 1, flexBasis: '80%' }}
                  className=" w-40 font-semibold text-green-900 "
                >
                  In case of passengers downloading fake apps or any other app
                  from Google Play which claim to sell train tickets of
                  Bangladesh Railway, the authorities will not take any
                  liability.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
