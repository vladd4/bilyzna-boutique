import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Жіночі Піжами від Білизна Boutique - Затишок та Стиль для Вашого Сну",
  description:
    "Знайдіть ідеальну жіночу піжаму у Білизна Boutique. Висока якість, зручність, різноманітність стилів. Спеціальні пропозиції та знижки.",
  openGraph: {
    title:
      "Жіночі Піжами від Білизна Boutique - Затишок та Стиль для Вашого Сну",
    description:
      "Знайдіть ідеальну жіночу піжаму у Білизна Boutique. Висока якість, зручність, різноманітність стилів. Спеціальні пропозиції та знижки.",
  },
};

export default function PijamaLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
