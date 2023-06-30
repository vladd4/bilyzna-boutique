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
