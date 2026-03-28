import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gyógytorna és fizioterápiás szolgáltatások Győrben | ReStart Physio',
  description: 'Gyógytorna és fizioterápiás szolgáltatások Győrben: sportrehabilitáció, műtét utáni rehabilitáció, gerincpanaszok kezelése, állkapocsízületi terápia és Schroth terápia.',
  keywords: 'gyógytorna szolgáltatások Győr, sportrehabilitáció, gerincstabilizáció, TMI terápia, FDM kezelés, BEMER terápia, Schroth terápia, dinamikus tape, core edzés',
  
  openGraph: {
    title: 'Gyógytorna és fizioterápiás szolgáltatások Győrben | ReStart Physio',
    description: 'Egyénre szabott gyógytorna és fizioterápia Győrben mozgásszervi panaszok, sportsérülések és rehabilitáció esetén.',
    images: [
      {
        url: 'https://restartphysio.hu/group_core1.jpg',
        width: 1200,
        height: 630,
        alt: 'ReStart Physio szolgáltatások - gyógytorna Győrben',
      }
    ],
    type: 'website',
    url: 'https://restartphysio.hu/szolgaltatasok',
    siteName: 'ReStart Physio',
    locale: 'hu_HU',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gyógytorna szolgáltatások Győrben | ReStart Physio',
    description: 'Sportrehabilitáció, gerincpanasz kezelés, TMJ és Schroth terápia egyénre szabottan.',
    images: ['https://restartphysio.hu/group_core1.jpg'],
  },

  alternates: {
    canonical: 'https://restartphysio.hu/szolgaltatasok',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
