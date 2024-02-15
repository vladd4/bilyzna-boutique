"use client";

import CartItem from "./CartItem";
import { useContext } from "react";
import Context from "../hooks/Context";
import { postTelegram } from "../utils/postTelegram";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  setAlertText,
  setIsOrder,
  setShowAlert,
} from "@/redux/slices/alertSlice";
import { hideHeader } from "@/utils/hide_cart_header";

const nextForm = () => {
  document.querySelector(".order-main-form").style.display = "none";
  document.querySelector(".order-second-form").style.display = "flex";
};

const sendCart = (cart, dispatch, router, properties) => {
  const name = document.querySelector(".input-name").value;
  const tel = document.querySelector(".input-phone").value;
  const mail = document.querySelector(".input-mail").value;
  const oplata_select = document.getElementById("select-oplata");
  const oplata = oplata_select.value;
  const city = document.querySelector("#input-city").value;
  const post_select = document.getElementById("select-post");
  const post = post_select.value;
  const vidil = document.querySelector("#input-vidil").value;
  const comment = document.querySelector("#input-comment").value;

  const data = `\n Ім'я: ${name} \n Телефон: ${tel} \n Пошта: ${mail} \n Спосіб оплати: ${oplata} \n Місто: ${city} \n Пошта: ${post} \n Віділення: ${vidil} \n Коментар: ${comment} \n ${JSON.stringify(
    cart
  )}`;

  postTelegram(data);

  document.querySelector(".input-name").value = "";
  document.querySelector(".input-phone").value = "";
  document.querySelector(".input-mail").value = "";
  document.querySelector(".order-main-form").style.display = "flex";
  document.querySelector(".order-second-form").style.display = "none";

  dispatch(
    setAlertText(
      "Дякуємо, Ваше замовлення успішно сформоване. Оператор зв'яжеться з Вами для уточнення деталей"
    )
  );
  dispatch(setShowAlert(true));
  dispatch(setIsOrder(true));
  setTimeout(() => {
    router.back();
    properties.setCart([]);
    window.sessionStorage.removeItem("cart");
  }, 500);
};

export default function OrderPage() {
  const properties = useContext(Context);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="order-page" onClick={hideHeader}>
      <h1 className="order-h">Мій кошик</h1>
      <div className="order-main container">
        <div className="row">
          <div className="order-main-prod col-lg-7">
            {properties.cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                  setCart={properties.setCart}
                  cart={properties.cart}
                  size={item.size}
                />
              );
            })}
            <p align="left" className="order-main-total">
              Загальна вартість{" "}
              <b className="order-total-bold">
                {properties.cart.reduce((acc, total) => acc + total.price, 0)} ₴
              </b>
            </p>
          </div>
          <div className="order-main-form col-lg-4">
            <p className="pib">1. Контактні дані</p>
            <input
              id="name"
              className="input-order input-name"
              placeholder="Введіть ім'я та прізвище*"
              required
            ></input>
            <input
              id="tel"
              className="input-order input-phone"
              placeholder="Введіть телефон*"
              required
            ></input>
            <input
              id="mail"
              className="input-order input-mail"
              placeholder="Введіть електронну адресу"
            ></input>
            <button
              className="order-submit-btn"
              onClick={() =>
                document.querySelector(".input-phone").value ? nextForm() : ""
              }
            >
              Підтвердити &rarr;
            </button>
          </div>
          <div className="order-second-form col-lg-4">
            <p className="pib">2. Оплата та доставка</p>
            <select
              className="input-order input-name order-select"
              defaultValue="placeholder"
              id="select-oplata"
            >
              <option
                className="select-placeholder"
                value="placeholder"
                disabled
              >
                Виберіть спосіб оплати*
              </option>
              <option value="Monobank">Monobank</option>
              <option value="Privat">Privat Bank</option>
            </select>
            <input
              className="input-order input-phone"
              placeholder="Введіть місто*"
              required
              id="input-city"
            />
            <select
              className="input-order input-mail order-select"
              id="select-post"
              defaultValue="placeholder"
            >
              <option
                className="select-placeholder"
                value="placeholder"
                disabled
              >
                Виберіть пошту*
              </option>
              <option value="NovaPost">Нова Пошта</option>
              <option value="UkrPost">Укр Пошта</option>
            </select>
            <input
              id="input-vidil"
              className="input-order input-phone"
              placeholder="Введіть номер віділення*"
              required
            />
            <input
              id="input-comment"
              className="input-order input-mail"
              placeholder="Коментар до замовлення"
            />
            <button
              className="order-submit-btn"
              onClick={() =>
                sendCart(properties.cart, dispatch, router, properties)
              }
            >
              Оформити &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
