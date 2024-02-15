import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Нічні Сорочки від Білизна Boutique - Елегантність та Комфорт на Ніч",
  description:
    "Вибирайте нічні сорочки у Білизна Boutique для затишних ночей. Різноманітність стилів, вишуканість дизайнів, висока якість.",
  openGraph: {
    title:
      "Нічні Сорочки від Білизна Boutique - Елегантність та Комфорт на Ніч",
    description:
      "Вибирайте нічні сорочки у Білизна Boutique для затишних ночей. Різноманітність стилів, вишуканість дизайнів, висока якість.",
  },
};

export default function NightLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
