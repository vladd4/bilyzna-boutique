import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Жіночі Трусики від Білизна Boutique - Різноманіття Стилів і Комфорту",
  description:
    "Вибирайте жіночі трусики від Білизна Boutique: бразиліана, сліпи, бікіні, стрінги. Якісна нижня білизна для кожної. Знижка на першу покупку 5%.",
  openGraph: {
    title:
      "Жіночі Трусики від Білизна Boutique - Різноманіття Стилів і Комфорту",
    description:
      "Вибирайте жіночі трусики від Білизна Boutique: бразиліана, сліпи, бікіні, стрінги. Якісна нижня білизна для кожної. Знижка на першу покупку 5%.",
    images: [
      {
        url: "https://www.bilyznaboutique.com.ua/og-pants.png",
        width: 1910,
        height: 910,
      },
    ],
  },
};

export default function WomunderLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
