import Block2 from "../imgs/Asset2.png";
import Block3 from "../imgs/Asset3.png";
import ItemsPageItem from "./ItemsPageItem";
import { useState, useEffect } from "react";

function changeSize(clicked, setClicked) {
  setClicked(!clicked);
}
async function sortBy(setProducts) {
  const selectValue =
    document.querySelector(".sort-select").options[
      document.querySelector(".sort-select").selectedIndex
    ].value;
  console.log(selectValue);
  const response = await fetch(
    `https://645ccfac250a246ae30ed653.mockapi.io/bilyzna/products?sortBy=price&order=${selectValue}`
  );
  const data = await response.json();
  setProducts([...data]);
}
const ItemsPage = ({
  products,
  title,
  setProducts,
  cart,
  setCart,
  setProd,
  prod,
  tovar,
  setTovar,
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="items-page container-fluid">
      <div className="row">
        <div className="side-block col-lg-2">
          <div className="side-pants material">
            <div className="side-wrap">
              <p className="side-top-h">Матеріал</p>
              <span
                className="side-span-close"
                onClick={(e) => {
                  document
                    .querySelector(".side-block")
                    .classList.remove("side-block-show");
                }}
              >
                x
              </span>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="braz"
                value="Новинки"
              ></input>
              <label for="braz">Атлас/сатин</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="slip"
                value="Вироблено в Україні"
              ></input>
              <label for="slip">Велюр</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="str"
                value="Ціна тижня"
              ></input>
              <label for="str">Мікросітка</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="short"
                value="Ціна тижня"
              ></input>
              <label for="short">Сітка</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="short"
                value="Ціна тижня"
              ></input>
              <label for="short">Еко-шкіра</label>
            </div>
          </div>
          <div className="side-pants">
            <p className="side-top-h">Тип трусиків</p>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="braz"
                value="Новинки"
              ></input>
              <label for="braz">Бразиліана</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="slip"
                value="Вироблено в Україні"
              ></input>
              <label for="slip">Сліпи</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="str"
                value="Ціна тижня"
              ></input>
              <label for="str">Стрінги</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="short"
                value="Ціна тижня"
              ></input>
              <label for="short">Шортики</label>
            </div>
          </div>
          <div className="side-pants chashka">
            <p className="side-top-h">Тип чашки</p>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="braz"
                value="Новинки"
              ></input>
              <label for="braz">Ущільнені</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="slip"
                value="Вироблено в Україні"
              ></input>
              <label for="slip">М'які</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="str"
                value="Ціна тижня"
              ></input>
              <label for="str">Push-ups</label>
            </div>
            <div>
              <input
                className="radios"
                type="checkbox"
                id="short"
                value="Ціна тижня"
              ></input>
              <label for="short">Напівщільні</label>
            </div>
          </div>
          <div className="side-pants size">
            <p className="side-top-h">Розмір</p>
            <div className="row size-row">
              <button className="top-size-btn col-lg-3 col-1">XS (34)</button>
              <button className="top-size-btn col-lg-3 col-1">S (36)</button>
              <button className="top-size-btn col-lg-3 col-1">M (24)</button>
              <button className="top-size-btn col-lg-3 col-1">L (41)</button>
              <button className="top-size-btn col-lg-3 col-1">Xl (28)</button>
              <button className="top-size-btn col-lg-3 col-1">2XL (11)</button>
              <button className="top-size-btn col-lg-3 col-1">3Xl (5)</button>
            </div>
          </div>
          <div className="side-pants size-bust">
            <p className="side-top-h">Розмір бюстгальтера</p>
            <div className="row size-row">
              <button className="top-size-btn col-lg-3 col-1">70A</button>
              <button className="top-size-btn col-lg-3 col-1">70B</button>
              <button className="top-size-btn col-lg-3 col-1">70C</button>
              <button className="top-size-btn col-lg-3 col-1">70D</button>
              <button className="top-size-btn col-lg-3 col-1">75A</button>
              <button className="top-size-btn col-lg-3 col-1">75B</button>
              <button className="top-size-btn col-lg-3 col-1">75C</button>
            </div>
          </div>
        </div>
        <div className="main-block col-lg-10">
          <div className="main-block-h">
            <h2 className="items-page-h">{title}</h2>
            <div className="filtr-block">
              <div className="filt-text">
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Сортуй
                  </a>
                </li>
                <select
                  name="select"
                  className="sort-select"
                  onChange={(e) => sortBy(setProducts)}
                >
                  <option value="top" selected>
                    найпопулярніші
                  </option>
                  <option value="asc">від дешевих</option>
                  <option value="desc">від дорогих</option>
                </select>
              </div>
              <div className="filt-icons">
                <img
                  onClick={(e) => changeSize(clicked, setClicked)}
                  className="filt-icon-img"
                  alt=""
                  src={Block2}
                ></img>
                <img
                  onClick={(e) => changeSize(clicked, setClicked)}
                  className="filt-icon-img"
                  alt=""
                  src={Block3}
                ></img>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((item) => {
              return (
                <ItemsPageItem
                  key={item.id}
                  id={"item-" + item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  img={item.img}
                  quantity={item.quantity}
                  size={clicked ? "col-lg-4" : "col-lg-3"}
                  setProd={setProd}
                  prod={prod}
                  tovar={tovar}
                  setTovar={setTovar}
                ></ItemsPageItem>
              );
            })}
          </div>
        </div>
      </div>
      <div className="filtr-down-block">
        <div className="row">
          <button
            className="filt-btn-down"
            onClick={(e) => {
              document
                .querySelector(".side-block")
                .classList.add("side-block-show");
            }}
          >
            Фільтруй
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
