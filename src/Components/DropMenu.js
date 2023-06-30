import Logo from "../imgs/logo.png";
// import Inst from "../imgs/instagram.png";
// import Face from "../imgs/facebook.png";
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
        <li>
          <button className="drop-li-btn">Новинки</button>
        </li>
        <li className="drop-li">
          <div className="drop-li-wrap">
            <button
              className="drop-li-btn"
              onClick={(e) => {
                showDrop(e);
              }}
            >
              Білизна{" "}
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
            <li>Піжами</li>
            <li>Носки</li>
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
              Піжами{" "}
            </button>
            <span onClick={(e) => hideDrop(e)} className="drop-close-span">
              &#8250;
            </span>
          </div>
          <div className="drop-menu-drop" id="drop2">
            <li>Жіноча білизна</li>
            <li>Трусики</li>
            <li>Піжами</li>
            <li>Носки</li>
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
              Панчохи
            </button>
            <span onClick={(e) => hideDrop(e)} className="drop-close-span">
              &#8250;
            </span>
          </div>
          <div className="drop-menu-drop" id="drop3">
            <li>
              <Link to="/bras">Бюстгалтери</Link>{" "}
            </li>
            <li>
              <Link to="/pants">Трусики</Link>
            </li>
            <li>Піжами</li>
            <li>Носки</li>
          </div>
        </li>
        <button className="drop-li-btn">Для чоловіків</button>
        <button className="drop-li-btn">Для малят</button>
      </ul>
      <div className="drop-icons-block">
        <a
          href="https://www.instagram.com/bilyzna.boutique/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="drop-icon-img" alt="" src=""></img>
        </a>
        <a
          href="https://www.facebook.com/bilyzna.boutique/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="drop-icon-img" alt="" src=""></img>
        </a>
      </div>
    </div>
  );
};
export default DropMenu;
