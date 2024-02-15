import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "Чоловічі Піжами від Білизна Boutique - Комфорт та Стиль для Домашнього Одягу",
  description:
    "Ексклюзивна колекція чоловічих піжам у Білизна Boutique. Висока якість, різноманітність стилів, зручність для відпочинку та сну.",
  openGraph: {
    title:
      "Чоловічі Піжами від Білизна Boutique - Комфорт та Стиль для Домашнього Одягу",
    description:
      "Ексклюзивна колекція чоловічих піжам у Білизна Boutique. Висока якість, різноманітність стилів, зручність для відпочинку та сну.",
  },
};

export default function ManLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
