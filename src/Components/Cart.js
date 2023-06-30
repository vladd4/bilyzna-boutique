import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Empty from "../imgs/empty-cart.png";
import Context from "../Hooks/Context";
import { useContext } from "react";

function hideCart() {
  document.querySelector(".cart").classList.remove("show-cart");
  document.querySelector(".changed-components").style.opacity = "1";
  document.querySelector(".changed-components").style.pointerEvents = "auto";
  document.querySelector(".navbar").style.opacity = "1";
  document.querySelector(".navbar").style.pointerEvents = "auto";
  document.querySelector(".newsletter-div").style.opacity = "1";
  document.querySelector(".newsletter-div").style.pointerEvents = "auto";
  document.querySelector("#footer").style.opacity = "1";
  document.querySelector("#footer").style.pointerEvents = "auto";
  document.querySelector(".banner").style.opacity = "1";
  document.querySelector(".banner").style.pointerEvents = "auto";
  document.querySelector(".breadcrumbs").style.opacity = "1";
  document.querySelector(".breadcrumbs").style.pointerEvents = "auto";
  document.querySelector(".links-row").style.opacity = "1";
  document.querySelector(".links-row").style.pointerEvents = "auto";
  document.body.style.overflow = "auto";
}

const Cart = () => {
  const properties = useContext(Context);
  return (
    <div className="cart">
      <div className="cart-main container">
        <div className="cart-items-block">
          {properties.cart.length >= 1 ? (
            properties.cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                  cart={properties.cart}
                  setCart={properties.setCart}
                  size={item.size}
                ></CartItem>
              );
            })
          ) : (
            <div className="cart-wrap">
              <img className="empty-cart-img" alt="" src={Empty}></img>
              <p className="empty-cart-p">
                Кошик порожній. Додайте хоча б один товар.
              </p>
            </div>
          )}
        </div>
        <div className="cart-foot">
          {properties.cart.length >= 1 ? (
            <>
              <p className="cart-total">
                Загальна вартість:{" "}
                <b className="b-price">
                  {" "}
                  {properties.cart.reduce(
                    (acc, total) => acc + total.price,
                    0
                  )}{" "}
                  ₴
                </b>
              </p>
              <Link className="cart-order-btn-link" to="/order">
                <button className="cart-order-btn" onClick={(e) => hideCart()}>
                  Оформити замовлення{" "}
                </button>
              </Link>
              <button className="cart-cont-btn" onClick={(e) => hideCart()}>
                Продовжити покупки
              </button>{" "}
            </>
          ) : (
            <button className="cart-cont-btn" onClick={(e) => hideCart()}>
              Продовжити покупки
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
