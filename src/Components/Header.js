import Search from "../imgs/search.png";
import Cart from "../imgs/cart.png";
import Insta from "../imgs/inst_header.png";
import Face from "../imgs/face-header.png";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo_white.svg";
import DropMenu from "./DropMenu";

function showCart() {
  document.querySelector(".cart").classList.add("show-cart");
  document.querySelector(".changed-components").style.opacity = "0.3";
  document.querySelector(".navbar").style.opacity = "0.3";
  document.querySelector(".navbar").style.pointerEvents = "none";
  document.querySelector(".newsletter-div").style.opacity = "0.3";
  document.querySelector(".newsletter-div").style.pointerEvents = "none";
  document.querySelector("#footer").style.opacity = "0.3";
  document.querySelector("#footer").style.pointerEvents = "none";
  document.querySelector(".banner").style.opacity = "0.3";
  document.querySelector(".banner").style.pointerEvents = "none";
  document.querySelector(".breadcrumbs").style.opacity = "0.3";
  document.querySelector(".breadcrumbs").style.pointerEvents = "none";
  document.querySelector(".links-row").style.opacity = "0.3";
  document.querySelector(".links-row").style.pointerEvents = "none";
  document.body.style.overflow = "hidden";
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
    <div className="head-wrap" id="header">
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
            <a
              href="https://www.instagram.com/bilyzna.boutique/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="header-social header-social-left"
                alt="insta"
                src={Insta}
              ></img>
            </a>
            <a
              href="https://www.facebook.com/bilyzna.boutique/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="facebook" className="header-social" src={Face}></img>
            </a>
          </p>
          <Link className="navbar-brand" to="/">
            <img className="logo" alt="logo" src={Logo}></img>
          </Link>
          <div className="icons-block">
            <div className="search-div">
              <input
                className="main-search"
                placeholder="Пошук по каталогу"
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
          <Link className="nav-link" to="/news">
            Новинки
          </Link>
        </div>
        <div className="drop-wrap">
          <Link className="nav-link">Жіноча Білизна</Link>
          <ul className="drop-list">
            <li className="drop-list-item-li">
              <Link className="drop-list-item" to="/bras">
                Бюстгалтери
              </Link>{" "}
            </li>
            <li>
              <Link className="drop-list-item" to="/pants">
                Трусики
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" to="/pijami">
                Піжами
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" to="/robes">
                Халати
              </Link>
            </li>
            <li className="drop-list-item">
              {" "}
              <Link className="drop-list-item" to="/nightwear">
                Нічні сорочки
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" to="/corrunderwear">
                Корегуюча білизна
              </Link>
            </li>
          </ul>
        </div>
        <div className="drop-wrap">
          <Link className="nav-link" to="/">
            Для чоловіків
          </Link>
          <ul className="drop-list">
            <li className="drop-list-item">
              <Link className="drop-list-item" to="/manpants">
                Труси
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" to="/manpijami">
                Піжами
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" to="/manrobes">
                Халати
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" to="/shirts">
                Майки
              </Link>
            </li>
          </ul>
        </div>
        <div className="drop-wrap">
          <Link className="nav-link" to="/">
            Купальники
          </Link>
          <ul className="drop-list">
            <li className="drop-list-item">
              <Link className="drop-list-item" to="/swimwear">
                Жіночі
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" to="/manswimwear">
                Чоловічі
              </Link>
            </li>
          </ul>
        </div>
        <Link className="nav-link" to="/sale">
          Знижки
        </Link>
      </div>
    </div>
  );
};

export default Header;
