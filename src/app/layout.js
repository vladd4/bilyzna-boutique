import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/hooks/Provider";
import ReduxProvider from "@/redux/ReduxProvider";
import Script from "next/script";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "Білизна Boutique | Ексклюзивна польська нижня білизна - Інтернет-магазин",
  description:
    "Елегантна польська нижня білизна великих розмірів від Білизна Boutique. Стиль, комфорт, широкий вибір. Безкоштовна доставка від 2000 грн.",
  openGraph: {
    title:
      "Білизна Boutique | Ексклюзивна польська нижня білизна - Інтернет-магазин",
    description:
      "Елегантна польська нижня білизна великих розмірів від Білизна Boutique. Стиль, комфорт, широкий вибір. Безкоштовна доставка від 2000 грн.",
  },
  metadataBase: "https://www.bilyznaboutique.com.ua/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <Script type="application/ld+json">
          {`
            {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Білизна Boutique",
            "url": "https://www.bilyznaboutique.com.ua/",
            "logo": "https://www.bilyznaboutique.com.ua/logo.png",
            "alternateName": "Інтернет-магазин нижньої білизни Білизна Boutique",
            "sameAs": "https://www.instagram.com/bilyzna.boutique/",
            "title": "Інтернет-магазин польської білизни Білизна Boutique",
            "description": "Елегантна польська нижня білизна великих розмірів від Білизна Boutique. Стиль, комфорт, широкий вибір. Безкоштовна доставка від 2000 грн.",
            "email": "bilyznapolska@gmail.com",
            "telephone": "+380950453539"
          }
      `}
        </Script>
        <Script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Білизна Boutique",
            "image": "https://www.bilyznaboutique.com.ua/logo.png",
            "description": "Інтернет-магазин польської нижньої білизни Білизна Boutique",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.7,
              "reviewCount": 131
            }
          }
        `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W7H2Y0W0DJ"
        ></Script>
        <Script id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-W7H2Y0W0DJ');
        `}
        </Script>
        <meta property="author" content="vladdonets & bohdanryzhko" />
        <meta
          name="google-site-verification"
          content="G5L3mH6nCFEDiY3F8oPMx4INUV5P41NuIzCgX57xExk"
        />
        <link rel="canonical" href="https://www.bilyznaboutique.com.ua/" />
        <link
          rel="icon"
          href="https://www.bilyznaboutique.com.ua/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className={mont.className}>
        <Provider>
          <ReduxProvider>{children}</ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}
