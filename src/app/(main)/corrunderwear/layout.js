import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "Корегуюча (утягуюча) Білизна від Білизна Boutique - Стиль та Комфорт на Кожен День",
  description:
    "Відчуйте впевненість з корегуючою/утягуючою білизною від Білизна Boutique. Широкий вибір, висока якість, ідеальний крій. Знижка на першу покупку 5%.",
  openGraph: {
    title:
      "Корегуюча Білизна від Білизна Boutique - Стиль та Комфорт на Кожен День",
    description:
      "Відчуйте впевненість з корегуючою/утягуючою білизною від Білизна Boutique. Широкий вибір, висока якість, ідеальний крій. Знижка на першу покупку 5%.",
  },
};

export default function CorrLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
