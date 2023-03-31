import './globals.css';

export const metadata = {
  title: 'TrainEase Online Ticket Booking',
  description:
    'TrainEase offers online train ticket booking services. Book your train tickets online and save time and money.',
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrain.png?alt=media&token=6f257144-154d-4a41-bf81-8390fd32f379',
  },
  openGraph: {
    title: 'TrainEase Online Ticket Booking',
    images:
      'https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2FAsset%205.png?alt=media&token=b7957d5a-88fc-439f-9070-559f0c08aba6',
    description:
      'TrainEase offers online train ticket booking services. Book your train tickets online and save time and money.',
    url: 'https://trainease-frontend.vercel.app/',
  },
  twitter: {
    title: 'TrainEase Online Ticket Booking',
    images:
      'https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2FAsset%205.png?alt=media&token=b7957d5a-88fc-439f-9070-559f0c08aba6',
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
