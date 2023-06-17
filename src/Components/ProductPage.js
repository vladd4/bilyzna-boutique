import { useState } from "react";
import ItemView from "./ItemView";

function showImage(e) {
  document.querySelector(".item-view-popup").style.display = "grid";
  document.querySelector(".item-view-popup img").src =
    e.target.getAttribute("src");
  document.querySelector(".App").style.height = "100vh";
  document.querySelector(".App").style.overflowX = "hidden";
}
function addToCart(cart, setCart, title, price, img, quantity, id) {
  if (quantity > 1) {
    let start_price = price;
    for (let i = 0; i < quantity - 1; i++) {
      price += start_price;
    }
  }
  setCart([
    ...cart,
    { id: id, title: title, img: img, price: price, quantity: quantity },
  ]);

  for (var i = 0; i < cart.length; i++) {
    if (id === cart[i].id) {
      cart[i].quantity += quantity;
      cart[i].price += price;
    }
  }
  document.querySelector(".btn-page").classList.add("btn-page-added");
  document.querySelector(".btn-page").disabled = true;
  console.log(cart);
}
const ProductPage = ({ prod, cart, setCart }) => {
  //console.log(prod.title, prod.img, prod.price);
  const [quantValue, setQuantValue] = useState(1);
  return (
    <>
      <div className="product-page container" id={prod.id}>
        <div className="row prod-row">
          <div className="row prod-img-row col-lg-8">
            <img
              className="col-lg-6 col-sm-6 col-6 prod-img"
              alt=""
              src={prod.img}
              onClick={(e) => showImage(e)}
            ></img>
            <img
              className="col-lg-6 col-sm-6 col-6 prod-img"
              alt=""
              src={prod.img}
              onClick={(e) => showImage(e)}
            ></img>
          </div>
          <div className="col-lg-3 prod-page-info">
            <h3 className="prod-page-h">{prod.title}</h3>
            <p className="prod-page-art">Артикул: 23574934</p>
            <p className="prod-page-size">
              Розмір: <button className="size-btn">S</button>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
            </p>
            <p className="prod-page-price">Ціна: {prod.price} грн.</p>
            <p className="prod-page-price prod-page-quantity">
              Кількість: {prod.quantity} шт.
            </p>
            <div className="quantity-wrapper">
              <button
                className="quantity-btn minus"
                onClick={(e) => {
                  if (quantValue > 1) setQuantValue(quantValue - 1);
                }}
              >
                -
              </button>
              <input
                onChange={(e) => setQuantValue(quantValue)}
                className="quantity-input-value"
                value={quantValue}
              ></input>
              <button
                className="quantity-btn plus"
                onClick={(e) => {
                  if (quantValue < prod.quantity) setQuantValue(quantValue + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              className="prod-page-cart-btn btn-page"
              onClick={(e) =>
                addToCart(
                  cart,
                  setCart,
                  prod.title,
                  prod.price,
                  prod.img,
                  quantValue,
                  prod.id
                )
              }
            >
              Додати в кошик
            </button>

            <div className="prod-page-small-info">
              <h5 className="prod-info-h">Опис товару: </h5>
              <p className="prod-info-p">
                w śmietankowym kolorze bez rękawów. Prosty fason to doskonała
                baza do wizytowych stylizacji – można do niej założyć obuwie w
                dowolnym kolorze oraz wyrazistą biżuterię, która doskonale
                będzie się prezentować na gładkim tle.
              </p>
              <h5 className="prod-info-h">Склад: </h5>
              <p className="prod-info-p">
                Odcień écru jest niezwykle twarzowy, pasuje też na wiele okazji.
              </p>
              <h5 className="prod-info-h">Розміри: </h5>
              <p className="prod-info-p">XS, S, M, L, XL, XXL</p>
            </div>
          </div>
        </div>
      </div>
      <ItemView></ItemView>
    </>
  );
};

export default ProductPage;
