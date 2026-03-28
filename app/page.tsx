import WhyChooseUs from '../components/WhyChooseUs';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';



export const metadata: Metadata = {
  title: 'Gyógytorna Győr - Fizioterápia és rehabilitáció | ReStart Physio',
  description:
    'Gyógytorna és fizioterápia Győrben derékfájás, nyakfájás, gerincpanaszok, sportsérülések és műtét utáni rehabilitáció esetén. Időpontfoglalás: +36 30 819 8449.',
  keywords:
    'gyógytorna Győr, fizioterápia Győr, sportrehabilitáció Győr, gerincpanaszok kezelése, manuálterápia Győr, porckorongsérv kezelés Győr, TMI terápia, funkcionális tréning',
  
  // ✅ JSON-LD structured data (LocalBusiness + Person)
  other: {
    'application-name': 'ReStart Physio',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
  
  openGraph: {
    title: 'Gyógytorna Győr - Fizioterápia és rehabilitáció | ReStart Physio',
    description:
      'Gyógytorna és fizioterápia Győrben egyénre szabott kezelési tervvel. Segítség derékfájás, gerincpanaszok és rehabilitáció esetén.',
    url: 'https://restartphysio.hu',
    siteName: 'ReStart Physio',
    images: [
      {
        url: 'https://restartphysio.hu/group_core1.jpg',
        width: 1200,
        height: 630,
        alt: 'ReStart Physio rendelő Győr - gyógytorna és fizioterápia szakember',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Gyógytorna Győr - Fizioterápia | ReStart Physio',
    description:
      'Gyógytorna és fizioterápia Győrben derékfájás, gerincpanaszok és sportrehabilitáció esetén.',
    images: ['https://restartphysio.hu/group_core1.jpg'],
  },
  
  alternates: {
    canonical: 'https://restartphysio.hu',
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


export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Milyen panaszokkal érdemes gyógytornászhoz fordulni?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gyógytornász segítségét érdemes kérni derékfájás, nyakfájás, gerincpanaszok, sportsérülések, műtét utáni rehabilitáció, ízületi fájdalmak, mozgáskorlátozottság, állkapocsízületi (TMJ/TMI) panaszok és skoliózis esetén."
                }
              },
              {
                "@type": "Question",
                "name": "Mennyi ideig tart egy gyógytornakezelés?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Egy kezelés általában 30 vagy 50 percig tart, az elvégzett terápia típusától és a páciens állapotától függően. Az első alkalommal állapotfelmérés is zajlik, amely alapján személyre szabott kezelési terv készül."
                }
              },
              {
                "@type": "Question",
                "name": "Szükséges-e orvosi beutaló a gyógytornakezeléshez?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nem, a ReStart Physio rendelőbe beutaló nélkül is lehet időpontot foglalni. Magánrendelőként bárki fordulhat hozzánk közvetlenül, orvosi utalvány nélkül."
                }
              },
              {
                "@type": "Question",
                "name": "Van-e parkolási lehetőség a rendelő közelében?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Igen, a rendelő közelében (9028 Győr, Máté Mária u. 4/B) ingyenes parkolási lehetőség áll rendelkezésre."
                }
              },
              {
                "@type": "Question",
                "name": "Mikor tartanak nyitva?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A ReStart Physio rendelő hétfőtől péntekig 08:00–18:00 között tart nyitva Győrben. Hétvégén zárva vagyunk."
                }
              },
              {
                "@type": "Question",
                "name": "Hogyan lehet időpontot foglalni?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Időpontot telefonon (+36 30 819 8449) vagy emailben (restart.gyor@gmail.com) lehet foglalni, illetve a weboldalon található kapcsolatfelvételi űrlapon keresztül az Elérhetőség oldalon."
                }
              }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden min-h-[600px] sm:min-h-[700px] w-full">
        {/* Háttérkép - teljes szélesség, kitöltés vágással */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/group_core1.jpg"
            alt="Csoportos core-stabilizációs gyakorlat a ReStart Physio fizioterapeutájának vezetésével – gumiszalagos törzsizom-erősítő tréning a stabil testtartásért."
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Halvány fehér overlay a szöveg olvashatóságához */}
        <div className="absolute inset-0 bg-white/60 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
            {/* Logo - bal oldal gépen, felül mobil */}
            <div className="relative order-first">
              <Image 
                src="/logo.png" 
                alt="ReStart Physio gyógytorna és fizioterápia logó Győr - ahol a mozgás újraindul" 
                width={500}
                height={350}
                className="w-full max-w-md mx-auto lg:max-w-none h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
            {/* Szöveg - jobb oldal gépen, alul mobil */}
            <div className="text-center lg:text-left order-last">
              <h1 className="mt-12 md:mt-24 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#004a6d] leading-tight mb-4 lg:mb-6">
                Gyógytorna és fizioterápia Győrben
              </h1>
              <p className="text-xl sm:text-2xl italic text-[#EC7007] font-semibold mb-4">
                Ahol a mozgás újraindul.
              </p>
              <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                Derékfájás, nyakfájás, gerincpanaszok, sportsérülés vagy műtét utáni rehabilitáció esetén
                egyénre szabott gyógytorna és fizioterápiás kezelésekkel segítek a tartós javulásban.
                A rendelő Győrben, a Máté Mária utcában található.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/elerhetoseg"
                  className="inline-flex items-center bg-[#EC7007] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d4610a] transition-colors duration-200"
                >
                  Időpontfoglalás
                </Link>
                <Link
                  href="/szolgaltatasok"
                  className="inline-flex items-center bg-[#004A6D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003654] transition-colors duration-200"
                >
                  Szolgáltatások megtekintése
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-[#00121a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT: Photo + basic info */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full max-w-3xl aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/main1.jpg"
                  alt="Gerincstabilizációs gyakorlat fitball gimnasztikai labdával – Forrás Fernanda, a ReStart Physio fizioterapeutája, szakértő irányításával."
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
                />
              </div>

              <div className="w-full flex flex-col items-center justify-center mt-6 mb-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#00254d] text-center">
                  Forrás Fernanda
                </h2>
                <p className="text-base text-[#00254d] mt-2 mb-4 text-center">
                  Gyógytornász - fizioterapeuta
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center mt-4">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#FFD7A3] to-[#EC7007] text-black shadow-sm transform transition hover:scale-105">
                  Manuálterápia
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#FFD7A3] to-[#EC7007] text-black shadow-sm transform transition hover:scale-105">
                  Közel 10 év szakmai tapasztalat
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#FFD7A3] to-[#EC7007] text-black shadow-sm transform transition hover:scale-105">
                  Sportrehabilitáció
                </span>
              </div>
            </div>

            {/* RIGHT: professional story */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Szakmai Háttér
              </h2>
              
              <div className="prose prose-lg text-gray-900 space-y-6 max-w-none">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <p className="[text-align:justify] indent-8 text-gray-900">
                    Diplomámat 2017-ben szereztem meg a Szegedi Tudományegyetem Egészségtudományi és Szociális Képzési Karán gyógytornász-fizioterapeuta szakon. Az elmúlt évek döntő részében élsportolókkal dolgoztam együtt, kezdetben kézilabdázókkal majd ezt követően a Győri ETO FC gyógytornászaként négy évig labdarúgókkal. Ezen évek alatt lehetőségem nyílt evezős sportolókkal, kosárlabdázókkal és atlétákkal is együtt dolgozni, így komplex rálátást és szemléletet kaptam különböző sportok rehabilitációjáról. 2024-től léptem át a magánszektorba, ahol számos mozgásszervi betegséggel hozzám forduló pácienst segíthettem vissza a mindennapi fájdalommentes életéhez.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <h4 className="text-2xl font-semibold text-gray-900 text-center lg:text-left mb-4">Szakterületeim</h4>
                  <ul className="space-y-3 list-none">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#004A6D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-900">Sportrehabilitáció és műtét utáni rehabilitáció</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#004A6D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-900">Derékfájás, nyakfájás és gerincpanaszok kezelése</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#004A6D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-900">Állkapocs ízületi panaszok kezelése</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#004A6D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-900">Porckorongsérv kezelése gyógytornával</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#004A6D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-900">Gerincferdülés kezelése (Schroth terápia)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#004A6D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-900">Ízületi és mozgásszervi panaszok kezelése</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <p className="[text-align:justify] indent-8 text-gray-900">
                    Az elmúlt évek tapasztalatait szeretném arra használni, hogy minél hatékonyabban tudjam segíteni a hozzám fordulókat, motivációt nyújtsak a rehabilitáció folyamatában és hozzásegítsem a pácienseimet a közösen kitűzött célok eléréséhez!
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="text-center text-sm leading-relaxed text-gray-900">
                    További információért tekintse meg{" "}
                    <Link 
                      href="/szolgaltatasok" 
                      className="text-[#004A6D] font-semibold underline hover:text-[#EC7007] transition-colors duration-200"
                    >
                      gyógytorna és fizioterápia szolgáltatásainkat
                    </Link>, vagy{" "}
                    <Link 
                      href="/elerhetoseg" 
                      className="text-[#004A6D] font-semibold underline hover:text-[#EC7007] transition-colors duration-200"
                    >
                      nézze meg elérhetőségeinket és időpontfoglalási lehetőségeinket
                    </Link>.
                  </p>
                </div>
              </div>
            </div>




          </div>
          {/* dekoratív háttér-kör (opcionális) */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl pointer-events-none" />
        </div>
      </section>


      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#004A6D] mb-3">
              Gyakran ismételt kérdések
            </h2>
            <p className="text-gray-600 text-lg">
              Válaszok a leggyakrabban felmerülő kérdésekre a gyógytorna kezelésekkel kapcsolatban.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Milyen panaszokkal érdemes gyógytornászhoz fordulni?",
                a: "Gyógytornász segítségét érdemes kérni derékfájás, nyakfájás, gerincpanaszok, sportsérülések, műtét utáni rehabilitáció, ízületi fájdalmak, mozgáskorlátozottság, állkapocsízületi (TMJ/TMI) panaszok és skoliózis esetén."
              },
              {
                q: "Mennyi ideig tart egy gyógytornakezelés?",
                a: "Egy kezelés általában 30 vagy 50 percig tart, az elvégzett terápia típusától és a páciens állapotától függően. Az első alkalommal állapotfelmérés is zajlik, amely alapján személyre szabott kezelési terv készül."
              },
              {
                q: "Szükséges-e orvosi beutaló a gyógytornakezeléshez?",
                a: "Nem, a ReStart Physio rendelőbe beutaló nélkül is lehet időpontot foglalni. Magánrendelőként bárki fordulhat hozzánk közvetlenül, orvosi utalvány nélkül."
              },
              {
                q: "Van-e parkolási lehetőség a rendelő közelében?",
                a: "Igen, a rendelő közelében (9028 Győr, Máté Mária u. 4/B) ingyenes parkolási lehetőség áll rendelkezésre."
              },
              {
                q: "Mikor tartanak nyitva?",
                a: "A ReStart Physio rendelő hétfőtől péntekig 08:00–18:00 között tart nyitva Győrben. Hétvégén zárva vagyunk."
              },
              {
                q: "Hogyan lehet időpontot foglalni?",
                a: "Időpontot telefonon (+36 30 819 8449) vagy emailben (restart.gyor@gmail.com) lehet foglalni, illetve a weboldalon található kapcsolatfelvételi űrlapon keresztül az Elérhetőség oldalon."
              }
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left font-semibold text-[#004A6D] text-base md:text-lg select-none list-none">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 shrink-0 ml-4 text-[#EC7007] transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}