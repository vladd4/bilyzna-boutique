"use client";

import CardRow from "@/components/CardRow";
import Slider from "@/components/Slider";
import StyleBanner from "@/components/StyleBanner";
import WhyUs from "@/components/WhyUs";
import LogosSlider from "@/components/LogoSlider";
import { hideHeader } from "@/utils/hide_cart_header";
import Faq from "@/components/FAQ";
import "@/styles/globals.css";

export default function Home() {
  return (
    <main className="changed-components" onClick={hideHeader}>
      <Slider />
      <CardRow />
      <StyleBanner />
      <LogosSlider />
      <WhyUs />
      <Faq />
    </main>
  );
}
