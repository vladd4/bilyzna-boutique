import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "Бюстгальтери від Білизна Boutique - Широкий Асортимент Якісної Нижньої Білизни",
  description:
    "Ознайомтеся з різноманіттям бюстгальтерів у Білизна Boutique. Якість, стиль, комфорт, білизна великих розмірів. Перша покупка - знижка 5%, доставка від 2000 грн.",
  openGraph: {
    title:
      "Бюстгальтери від Білизна Boutique - Широкий Асортимент Якісної Нижньої Білизни",
    description:
      "Ознайомтеся з різноманіттям бюстгальтерів у Білизна Boutique. Якість, стиль, комфорт, білизна великих розмірів. Перша покупка - знижка 5%, доставка від 2000 грн.",
    images: [
      {
        url: "https://www.bilyznaboutique.com.ua/og-bra.png",
        width: 1910,
        height: 910,
      },
    ],
  },
};

export default function BraLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
