import Header from "@/components/Header";
import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import AlertItem from "@/components/Alert";

import "@/styles/globals.css";

export default function MainLayout({ children }) {
  return (
    <section>
      <Banner />
      <Header />
      <BreadCrumbs />
      <Cart />
      {children}
      <NewsLetter />
      <Footer />
      <AlertItem />
    </section>
  );
}
