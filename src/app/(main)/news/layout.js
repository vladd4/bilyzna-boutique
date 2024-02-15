import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Новинки в Білизна Boutique - Останні Тренди Нижньої Білизни",
  description:
    "Відкрийте найновіші колекції нижньої білизни в Білизна Boutique. Сучасні тренди, висока якість, елегантність для кожного.",
  openGraph: {
    title: "Новинки в Білизна Boutique - Останні Тренди Нижньої Білизни",
    description:
      "Відкрийте найновіші колекції нижньої білизни в Білизна Boutique. Сучасні тренди, висока якість, елегантність для кожного.",
  },
};

export default function ManLayout({ children }) {
  return <main className={mont.className}>{children}</main>;
}
