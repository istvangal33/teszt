import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gyógytorna rendelő galéria Győr | ReStart Physio',
  description: 'Gyógytorna rendelő és fizioterápiás kezelések képei Győrben: modern kezelőterek, rehabilitációs eszközök, sportrehabilitáció és manuális terápiák.',
  keywords: 'gyógytorna rendelő Győr képek, fizioterapeuta galéria, BEMER terápia fotók, sportrehabilitáció Győr, gerincstabilizáció képek, core tréning galéria',
  
  openGraph: {
    title: 'Gyógytorna rendelő galéria Győr | ReStart Physio',
    description: 'Nézze meg rendelőnket és kezeléseinket képekben: gyógytorna, fizioterápia és rehabilitáció Győrben.',
    images: [
      {
        url: 'https://restartphysio.hu/rendelo1.jpeg', // ✅ Teljes URL
        width: 1200,
        height: 630,
        alt: 'ReStart Physio rendelő Győr - modern gyógytorna környezet',
      }
    ],
    type: 'website',
    url: 'https://restartphysio.hu/galeria',
    siteName: 'ReStart Physio',
    locale: 'hu_HU',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gyógytorna rendelő galéria Győr | ReStart Physio',
    description: 'Rendelő és kezelések képekben Győrben.',
    images: ['https://restartphysio.hu/rendelo2.jpeg'], // ✅ Teljes URL
  },

  alternates: {
    canonical: 'https://restartphysio.hu/galeria',
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

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
