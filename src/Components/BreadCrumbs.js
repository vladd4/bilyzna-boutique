import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";
  let i = 0;
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      if (crumb === "bras") crumb = "бюстгальтери";
      else if (crumb === "order") crumb = "кошик";
      else if (crumb === "pants") crumb = "трусики";
      else if (crumb === "delivery") crumb = "доставка";
      else if (crumb === "return") crumb = "повернення";
      else if (crumb === "robes") crumb = "халати";
      else if (crumb === "nightwear") crumb = "нічні сорочки";
      else if (crumb === "pijami") crumb = "піжами";
      else if (crumb === "corrunderwear") crumb = "корегуюча білизна";
      else if (crumb === "shirts") crumb = "майки";
      else if (crumb === "manpijami") crumb = "чоловічі піжами";
      else if (crumb === "manpants") crumb = "чоловічі труси";
      else if (crumb === "manrobes") crumb = "халати";
      else if (crumb === "swimwear") crumb = "купальники";
      else if (crumb === "manswimwear") crumb = "пляжні шорти";
      else if (crumb === "sale") crumb = "знижки";
      else if (crumb === "news") crumb = "новинки";
      let crumbText = crumb.charAt(0).toUpperCase() + crumb.slice(1);
      crumbText = decodeURIComponent(crumbText.replace(/\+/g, " "));
      return (
        <Link className="bread-item" to={currentLink} key={i++}>
          {crumbText.charAt(0).toUpperCase() + crumbText.slice(1).toLowerCase()}
        </Link>
      );
    });
  function check() {
    if (crumbs.length !== 0) {
      document.querySelector(".breadcrumbs").style.display = "block";
    } else if (crumbs.length === 0) {
      document.querySelector(".breadcrumbs").style.display = "none";
    }
  }
  useEffect(() => {
    check();
  });
  return (
    <div className="breadcrumbs container">
      <ul className="bread-list">
        <Link className="bread-item" to="/">
          Головна
        </Link>
        {crumbs}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
