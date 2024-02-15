import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "Чоловічі Майки від Білизна Boutique - Стиль та Комфорт для Кожного Дня",
  description:
    "Великий асортимент чоловічих майок у Bilyzna Boutique. Якість, зручність, ідеальний вибір для повсякденного носіння. Спеціальні знижки доступні.",
  openGraph: {
    title:
      "Чоловічі Майки від Білизна Boutique - Стиль та Комфорт для Кожного Дня",
    description:
      "Великий асортимент чоловічих майок у Bilyzna Boutique. Якість, зручність, ідеальний вибір для повсякденного носіння. Спеціальні знижки доступні.",
  },
};

export default function ManLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
