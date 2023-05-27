import Search from "../imgs/search.png";
import Cart from "../imgs/cart.png";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
import DropMenu from "./DropMenu";

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 5) {
//     this.document.querySelector(".head-wrap").classList.add("sticky-nav");
//   } else {
//     this.document.querySelector(".head-wrap").classList.remove("sticky-nav");
//   }
// });

function showCart() {
  document.querySelector(".cart").classList.add("show-cart");
  document.querySelector(".changed-components").style.opacity = "0.3";
  document.querySelector(".navbar").style.opacity = "0.3";
  document.querySelector(".newsletter-div").style.opacity = "0.3";
  document.querySelector("#footer").style.opacity = "0.3";
  document.querySelector(".banner").style.opacity = "0.3";
  document.querySelector(".breadcrumbs").style.opacity = "0.3";
  document.querySelector(".links-row").style.opacity = "0.3";
}

function showMenu() {
  document.querySelector(".drop-menu-nav").classList.add("drop-show");
}

function showSearch(searchValue, setSearchValue) {
  console.log(searchValue);
  setSearchValue("");
}
const Header = ({ searchValue, setSearchValue }) => {
  return (
    <div className="head-wrap">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={(e) => showMenu()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <DropMenu></DropMenu>
          <p className="ua-en">
            <b>Укр</b>/Рус
          </p>
          <Link className="navbar-brand" to="/">
            <img className="logo" alt="logo" src={Logo}></img>
          </Link>
          <div className="icons-block">
            <div className="search-div">
              <input
                className="main-search"
                placeholder="Пошук..."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              ></input>
            </div>
            <img
              className="header-icons search-icon"
              alt=""
              src={Search}
              onClick={(e) => {
                showSearch(searchValue, setSearchValue);
              }}
            ></img>
            <img
              className="header-icons cart-icon"
              alt=""
              src={Cart}
              onClick={(e) => showCart()}
            ></img>
          </div>
        </div>
      </nav>
      <div className="container-fluid links-row">
        <div className="drop-wrap">
          <a className="nav-link" to="/">
            Новинки
          </a>
          <ul className="drop-list">
            <li className="drop-list-item">Бюсгалтера</li>
            <li className="drop-list-item">Трусики</li>
            <li className="drop-list-item">Піжами</li>
            <li className="drop-list-item">Бюсти</li>
            <li className="drop-list-item">Ночнушки</li>
          </ul>
        </div>
        <div className="drop-wrap">
          <a className="nav-link" to="/">
            Білизна
          </a>
          <ul className="drop-list">
            <Link className="drop-list-item" to="/bilyzna">
              Жіноча білизна
            </Link>
            <li className="drop-list-item">Трусики</li>
            <li className="drop-list-item">Піжами</li>
            <li className="drop-list-item">Бюсти</li>
            <li className="drop-list-item">Ночнушки</li>
            <li className="drop-list-item">Носки</li>
            <li className="drop-list-item">Плаття</li>
          </ul>
        </div>

        <Link className="nav-link" to="/">
          Жіночий одяг
        </Link>

        <Link className="nav-link" to="/">
          Піжами
        </Link>
        <Link className="nav-link" to="/">
          Панчохи та носки
        </Link>

        <Link className="nav-link" to="/">
          Для малят
        </Link>

        <Link className="nav-link" to="/">
          Для чоловіків
        </Link>

        <Link className="nav-link" to="/">
          Знижки
        </Link>
      </div>
    </div>
  );
};

export default Header;
