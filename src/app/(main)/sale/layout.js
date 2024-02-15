import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Знижки в Білизна Boutique - Ексклюзивні Пропозиції на Нижню Білизну",
  description:
    "Скористайтеся вигідними знижками на нижню білизну в Білизна Boutique. Якісні товари за спеціальними цінами. Знайдіть свій ідеальний вибір!",
  openGraph: {
    title:
      "Знижки в Білизна Boutique - Ексклюзивні Пропозиції на Нижню Білизну",
    description:
      "Скористайтеся вигідними знижками на нижню білизну в Білизна Boutique. Якісні товари за спеціальними цінами. Знайдіть свій ідеальний вибір!",
  },
};

export default function ManLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
