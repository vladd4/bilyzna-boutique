import { useState, useContext } from "react";
import ItemView from "./ItemView";
import Context from "../Hooks/Context";

function showImage(e) {
  document.querySelector(".item-view-popup").style.display = "grid";
  document.querySelector(".item-view-popup img").src =
    e.target.getAttribute("src");
  document.querySelector(".App").style.height = "100vh";
  document.querySelector(".App").style.overflowX = "hidden";
}
function getSize(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].disabled) return buttons[i].textContent;
  }
}
function addToCart(cart, setCart, title, price, img, quantity, id, buttons) {
  if (quantity > 1) {
    let start_price = price;
    for (let i = 0; i < quantity - 1; i++) {
      price += start_price;
    }
  }
  let size = getSize(buttons);
  // Check if the item with the same ID and size already exists in the cart
  let existingItemIndex = cart.findIndex(
    (item) => item.id === id && item.size === size
  );

  if (existingItemIndex !== -1) {
    // If the item exists, update the quantity and price
    cart[existingItemIndex].quantity += quantity;
    cart[existingItemIndex].price += price;
  } else {
    // If the item doesn't exist, add it to the cart
    cart.push({
      id: id,
      title: title,
      img: img,
      price: price,
      quantity: quantity,
      size: size,
    });
  }

  // Update the cart state
  setCart([...cart]);

  document.querySelector(".btn-page").classList.add("btn-page-added");
  document.querySelector(".btn-page").disabled = true;
}
const ProductPage = () => {
  const [quantValue, setQuantValue] = useState(1);
  const properties = useContext(Context);
  return (
    <>
      <div className="product-page container" id={properties.prod.id}>
        <div className="row prod-row">
          <div className="row prod-img-row col-lg-8">
            <img
              className="col-lg-6 col-sm-6 col-6 prod-img"
              alt=""
              src={properties.prod.img}
              onClick={(e) => showImage(e)}
            ></img>
            <img
              className="col-lg-6 col-sm-6 col-6 prod-img"
              alt=""
              src={properties.prod.img}
              onClick={(e) => showImage(e)}
            ></img>
          </div>
          <div className="col-lg-3 prod-page-info">
            <h3 className="prod-page-h">{properties.prod.title}</h3>
            <p className="prod-page-art">Виробник: AVA</p>
            <p className="prod-page-art">Артикул: 23574934</p>
            <p className="prod-page-size">
              Розмір:{" "}
              <button
                className="size-btn"
                id="s"
                onClick={(e) => {
                  document.querySelector("#s").disabled = true;
                }}
              >
                S
              </button>
              <button
                className="size-btn"
                id="m"
                onClick={(e) => {
                  document.querySelector("#m").disabled = true;
                }}
              >
                M
              </button>
              <button
                className="size-btn"
                id="l"
                onClick={(e) => {
                  document.querySelector("#l").disabled = true;
                }}
              >
                L
              </button>
            </p>
            <p className="prod-page-price">
              Ціна: {properties.prod.price} грн.
            </p>
            <p className="prod-page-price prod-page-quantity">
              Кількість: {properties.prod.quantity} шт.
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
                  if (quantValue < properties.prod.quantity)
                    setQuantValue(quantValue + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              className="prod-page-cart-btn btn-page"
              onClick={(e) =>
                addToCart(
                  properties.cart,
                  properties.setCart,
                  properties.prod.title,
                  properties.prod.price,
                  properties.prod.img,
                  quantValue,
                  properties.prod.id,
                  document.querySelectorAll(".size-btn")
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
            </div>
          </div>
        </div>
      </div>
      <ItemView></ItemView>
    </>
  );
};

export default ProductPage;
