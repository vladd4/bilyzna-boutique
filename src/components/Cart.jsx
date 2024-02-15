"use client";

import CartItem from "./CartItem";

import Link from "next/link";
import Image from "next/image";

import Empty from "@/../public/empty-cart.png";

import Context from "../hooks/Context";
import { useContext, useEffect, useRef } from "react";
import { hideCart } from "../utils/hide_cart_header";

export default function Cart() {
  const { cart, setCart } = useContext(Context);
  const componentRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const burgerIcon = document.querySelector(".cart-icon");
      if (burgerIcon) {
        if (
          componentRef.current &&
          !componentRef.current.contains(event.target) &&
          event.target !== burgerIcon
        ) {
          hideCart();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    sessionStorage.getItem("cart") &&
      setCart([...JSON.parse(sessionStorage.getItem("cart"))]);
  }, [setCart]);

  return (
    <div className="cart" ref={componentRef}>
      <div className="cart-main container">
        <div className="cart-items-block">
          {cart.length >= 1 ? (
            cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                  cart={cart}
                  setCart={setCart}
                  size={item.size}
                />
              );
            })
          ) : (
            <div className="cart-wrap">
              <Image
                className="empty-cart-img"
                alt="Empty cart"
                src={Empty}
                width={495}
                height={351}
              />
              <p className="empty-cart-p">
                Кошик порожній. Додайте хоча б один товар.
              </p>
            </div>
          )}
        </div>
        <div className="cart-foot">
          {cart.length >= 1 ? (
            <>
              <p className="cart-total">
                Загальна вартість:{" "}
                <b className="b-price">
                  {cart.reduce((acc, total) => acc + total.price, 0)} ₴
                </b>
              </p>
              <Link className="cart-order-btn-link" href="/order">
                <button className="cart-btn cart-order-btn" onClick={hideCart}>
                  Оформити замовлення
                </button>
              </Link>
              <button className="cart-btn cart-cont-btn" onClick={hideCart}>
                Продовжити покупки
              </button>
            </>
          ) : (
            <button className="cart-btn cart-cont-btn" onClick={hideCart}>
              Продовжити покупки
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
