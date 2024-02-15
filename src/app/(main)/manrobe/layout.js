import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Чоловічі Халати від Білизна Boutique - Розкіш та Комфорт для Дому",
  description:
    "Відкрийте колекцію чоловічих халатів у Білизна Boutique. Висока якість, різноманітність стилів, ідеальний вибір для домашнього затишку.",
  openGraph: {
    title: "Чоловічі Халати від Білизна Boutique - Розкіш та Комфорт для Дому",
    description:
      "Відкрийте колекцію чоловічих халатів у Білизна Boutique. Висока якість, різноманітність стилів, ідеальний вибір для домашнього затишку.",
  },
};

export default function ManLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
