import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Жіночі Халати від Білизна Boutique - Комфорт та Стиль для Дому",
  description:
    "Обирайте з колекції жіночих халатів у Білизна Boutique. Якість, розкіш, різноманітність дизайнів. Затишок для вашого дому.",
  openGraph: {
    title: "Жіночі Халати від Білизна Boutique - Комфорт та Стиль для Дому",
    description:
      "Обирайте з колекції жіночих халатів у Білизна Boutique. Якість, розкіш, різноманітність дизайнів. Затишок для вашого дому.",
  },
};

export default function RobesLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
