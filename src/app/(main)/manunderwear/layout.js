import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Чоловіча Нижня Білизна від Білизна Boutique - Комфорт та Стиль",
  description:
    "Великий вибір чоловічої нижньої білизни у Білизна Boutique. Зручність та якість для кожного дня. Спеціальні пропозиції та знижки.",
  openGraph: {
    title: "Чоловіча Нижня Білизна від Білизна Boutique - Комфорт та Стиль",
    description:
      "Великий вибір чоловічої нижньої білизни у Білизна Boutique. Зручність та якість для кожного дня. Спеціальні пропозиції та знижки.",
  },
};

export default function ManLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
