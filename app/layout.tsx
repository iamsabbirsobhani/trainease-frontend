import './globals.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import 'primereact/resources/primereact.min.css';

import 'primeicons/primeicons.css';
export const metadata = {
  title: 'TrainEase Online Ticket Booking',
  description:
    'TrainEase offers online train ticket booking services. Book your train tickets online and save time and money.',
  openGraph: {
    title: 'TrainEase Online Ticket Booking',
    images:
      'https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrainease-og-image.svg?alt=media&token=01d993ef-6caf-4e36-9c4a-eff8cc439ace',
    description:
      'TrainEase offers online train ticket booking services. Book your train tickets online and save time and money.',
    url: 'https://trainease-frontend.vercel.app/',
  },
  twitter: {
    title: 'TrainEase Online Ticket Booking',
    images:
      'https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrainease-og-image.svg?alt=media&token=01d993ef-6caf-4e36-9c4a-eff8cc439ace',
    description:
      'TrainEase offers online train ticket booking services. Book your train tickets online and save time and money.',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
