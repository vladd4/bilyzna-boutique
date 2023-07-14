import Logo from "../imgs/logo.png";
import Insta from "../imgs/drop_inst.png";
import Face from "../imgs/drop_face.png";
import { Link } from "react-router-dom";

function showDrop(e) {
  e.target
    .closest(".drop-li")
    .querySelector(".drop-menu-drop")
    .classList.add("drop-menu-drop-show");

  e.target.closest(".drop-li").querySelector(".drop-close-span").innerHTML =
    "&#8593;";
  e.target.classList.add("hovered-drop");
  e.target
    .closest(".drop-li")
    .querySelector(".drop-close-span")
    .classList.add("hovered-drop");
}

function hideDrop(e) {
  e.target
    .closest(".drop-li")
    .querySelector(".drop-menu-drop")
    .classList.remove("drop-menu-drop-show");

  e.target
    .closest(".drop-li")
    .querySelector(".drop-close-span").innerHTML = `&#8250;`;
  e.target
    .closest(".drop-li-wrap")
    .querySelector(".drop-li-btn")
    .classList.remove("hovered-drop");
  e.target
    .closest(".drop-li")
    .querySelector(".drop-close-span")
    .classList.remove("hovered-drop");
}

const DropMenu = () => {
  return (
    <div className="drop-menu-nav">
      <div className="drop-logo-row">
        <img className="drop-logo-img" alt="" src={Logo}></img>
      </div>
      <ul>
        <li className="drop-li">
          <div className="drop-li-wrap">
            <button className="drop-li-btn" to="/sale">
              <Link className="drop-li-btn" to="/news">
                Новинки
              </Link>
            </button>
          </div>
        </li>
        <li className="drop-li">
          <div className="drop-li-wrap">
            <button
              className="drop-li-btn"
              onClick={(e) => {
                showDrop(e);
              }}
            >
              Жіноча білизна
            </button>
            <span onClick={(e) => hideDrop(e)} className="drop-close-span">
              &#8250;
            </span>
          </div>
          <div className="drop-menu-drop" id="drop1">
            <li>
              <Link to="/bras">Бюстгалтери</Link>{" "}
            </li>
            <li>
              <Link to="/pants">Трусики</Link>
            </li>
            <li>
              <Link to="/pijami">Піжами</Link>
            </li>
            <li>
              <Link to="/robes">Халати</Link>
            </li>
            <li>
              <Link to="/nightwear">Нічні сорочки</Link>
            </li>
            <li>
              <Link to="/corrunderwear">Корегуюча білизна</Link>
            </li>
          </div>
        </li>
        <li className="drop-li">
          <div className="drop-li-wrap">
            <button
              className="drop-li-btn"
              onClick={(e) => {
                showDrop(e);
              }}
            >
              Для чоловіків
            </button>
            <span onClick={(e) => hideDrop(e)} className="drop-close-span">
              &#8250;
            </span>
          </div>
          <div className="drop-menu-drop" id="drop2">
            <li>
              <Link to="/manpants">Труси</Link>
            </li>
            <li>
              <Link to="/manpijami">Піжами</Link>
            </li>
            <li>
              <Link to="/manrobes">Халати</Link>
            </li>
            <li>
              <Link to="/shirts">Майки</Link>
            </li>
          </div>
        </li>
        <li className="drop-li">
          <div className="drop-li-wrap">
            <button
              className="drop-li-btn"
              onClick={(e) => {
                showDrop(e);
              }}
            >
              Купальники
            </button>
            <span onClick={(e) => hideDrop(e)} className="drop-close-span">
              &#8250;
            </span>
          </div>
          <div className="drop-menu-drop" id="drop2">
            <li>
              <Link to="/swimwear">Жіночі</Link>
            </li>
            <li>
              <Link to="/manswimwear">Чоловічі</Link>
            </li>
          </div>
        </li>
        <li className="drop-li">
          <div className="drop-li-wrap">
            <button className="drop-li-btn" to="/sale">
              <Link className="drop-li-btn" to="/sale">
                Знижки
              </Link>
            </button>
          </div>
        </li>
      </ul>
      <div className="drop-icons-block">
        <a
          href="https://www.instagram.com/bilyzna.boutique/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="drop-icon-img" alt="" src={Insta}></img>
        </a>
        <a
          href="https://www.facebook.com/bilyzna.boutique/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="drop-icon-img" alt="" src={Face}></img>
        </a>
      </div>
    </div>
  );
};
export default DropMenu;
