import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gyógytorna árak Győrben | ReStart Physio',
  description: 'Gyógytorna és fizioterápia árak Győrben: egyéni kezelések, sportrehabilitáció, TMJ terápia, FDM kezelés, csoportos core edzés és bérletárak.',
  keywords: 'fizioterápia árak Győr, gyógytorna ár, TMI terápia ár, FDM kezelés árak, csoportos edzés bérlet, gyógytorna Győr árak, sportrehabilitáció költség',
  
  openGraph: {
    title: 'Gyógytorna árak Győrben | ReStart Physio',
    description: 'Átlátható gyógytorna és fizioterápia árlista Győrben, rejtett költségek nélkül.',
    images: ['/group_core1.jpg'], 
    type: 'website',
    url: 'https://restartphysio.hu/arak',
    siteName: 'ReStart Physio',
    locale: 'hu_HU',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gyógytorna árak Győrben | ReStart Physio',
    description: 'Egyéni kezelések, bérletek és fizioterápiás árak Győrben.',
    images: ['/group_core1.jpg'],
  },

  alternates: {
    canonical: 'https://restartphysio.hu/arak',
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

export default function PriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
