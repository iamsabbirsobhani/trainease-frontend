import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { DestinationForm } from '@/components/Home/DestinationForm';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="">
      <DestinationForm />
    </main>
  );
}
