import Block2 from "../imgs/Asset2.png";
import Block3 from "../imgs/Asset3.png";
import ItemsPageItem from "./ItemsPageItem";
import { useState } from "react";

function changeSize(clicked, setClicked) {
  setClicked(!clicked);
}
async function sortBy(base, setProducts) {
  const selectValue =
    document.querySelector(".sort-select").options[
      document.querySelector(".sort-select").selectedIndex
    ].value;
  const response = await fetch(`https://localhost:8080/${base}/${selectValue}`);
  const data = await response.json();
  setProducts([...data]);
}
const ItemsPage = ({
  products,
  title,
  setProducts,
  setProd,
  prod,
  tovar,
  setTovar,
  filtr,
  base,
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="items-page container-fluid">
      <div className="row">
        {filtr}
        <div className="main-block col-lg-10">
          <div className="main-block-h">
            <h2 className="items-page-h">{title}</h2>
            <div className="filtr-block">
              <div className="filt-text">
                <li className="nav-item ">
                  <button
                    disabled
                    className="nav-link"
                    id="sort-btn"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Сортуй
                  </button>
                </li>
                <select
                  name="select"
                  className="sort-select"
                  onChange={(e) => sortBy(base, setProducts)}
                >
                  <option value="sortDate" selected>
                    найпопулярніші
                  </option>
                  <option value="sortCheap">від дешевих</option>

                  <option value="sortExp">від дорогих</option>
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
                  id={item.id}
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
