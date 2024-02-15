"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
  const pathname = usePathname();
  let currentLink = "";
  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      if (crumb === "bra") crumb = "бюстгальтери";
      else if (crumb === "order") crumb = "кошик";
      else if (crumb === "womunderwear") crumb = "трусики";
      else if (crumb === "delivery") crumb = "доставка";
      else if (crumb === "return") crumb = "повернення";
      else if (crumb === "robe") crumb = "халати";
      else if (crumb === "nightgowns") crumb = "нічні сорочки";
      else if (crumb === "pijamas") crumb = "піжами";
      else if (crumb === "corrunderwear") crumb = "корегуюча білизна";
      else if (crumb === "manshirt") crumb = "майки";
      else if (crumb === "manpijamas") crumb = "чоловічі піжами";
      else if (crumb === "manunderwear") crumb = "чоловічі труси";
      else if (crumb === "manrobe") crumb = "халати";
      else if (crumb === "womswimsuit") crumb = "купальники";
      else if (crumb === "manswimsuit") crumb = "пляжні шорти";
      else if (crumb === "sale") crumb = "знижки";
      else if (crumb === "news") crumb = "новинки";
      let crumbText = crumb.charAt(0).toUpperCase() + crumb.slice(1);
      crumbText = decodeURIComponent(crumbText.replace(/\+/g, " "));

      return (
        <Link className="bread-item" href={currentLink} key={crumb}>
          {crumbText.charAt(0).toUpperCase() + crumbText.slice(1).toLowerCase()}
        </Link>
      );
    });

  if (crumbs.length === 0) {
    return null;
  } else {
    return (
      <div className="breadcrumbs container">
        <ul className="bread-list">
          <Link className="bread-item" href="/">
            Головна
          </Link>
          {crumbs}
        </ul>
      </div>
    );
  }
}
