import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Жіночі Купальники від Білизна Boutique - Стиль та Комфорт для Пляжу",
  description:
    "Знайдіть ідеальний жіночий купальник у Білизна Boutique. Різноманітність дизайнів, якість та елегантність для кожної. Спеціальні знижки доступні.",
  openGraph: {
    title:
      "Жіночі Купальники від Білизна Boutique - Стиль та Комфорт для Пляжу",
    description:
      "Знайдіть ідеальний жіночий купальник у Білизна Boutique. Різноманітність дизайнів, якість та елегантність для кожної. Спеціальні знижки доступні.",
  },
};

export default function ManLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
