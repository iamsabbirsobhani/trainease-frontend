import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { DestinationForm } from '@/components/Home/DestinationForm';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main className="">
        <div className=" w-[800px] rounded-md">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrain-bg.jpg?alt=media&token=35f96e04-32bc-48c6-917c-16e1c05d420f"
            alt="Picture of the author"
            width={1920}
            height={1080}
            className="rounded-md top-16 right-0 left-[350px] relative"
          />
        </div>
        <DestinationForm />
      </main>
    </>
  );
}
