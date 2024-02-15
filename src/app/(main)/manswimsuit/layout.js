import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "Чоловічі Пляжні Шорти від Білизна Boutique - Стиль і Комфорт на Пляжі",
  description:
    "Великий вибір чоловічих пляжних шортів у Білизна Boutique. Ідеальний стиль та комфорт для літнього відпочинку. Знижки на першу покупку 5%.",
  openGraph: {
    title:
      "Чоловічі Пляжні Шорти від Білизна Boutique - Стиль і Комфорт на Пляжі",
    description:
      "Великий вибір чоловічих пляжних шортів у Білизна Boutique. Ідеальний стиль та комфорт для літнього відпочинку. Знижки на першу покупку 5%.",
  },
};

export default function ManLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
