import CartItem from "./CartItem";
import Modal from "./Modal";
import { useContext } from "react";
import Context from "../Hooks/Context";
function nextForm() {
  document.querySelector(".order-main-form").style.display = "none";
  document.querySelector(".order-second-form").style.display = "flex";
}
async function sendCartToTelegram(message) {
  const botToken = "6029116446:AAESbXLFS9uZn9IS4ibXDqELPjMwiHWZQ7g";
  const chatId = "-975922405";

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (response.ok) {
      console.log("Form was send!");
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
function sendCart(cart) {
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

  const data = `Ім'я: ${name} \n Телефон: ${tel} \n Пошта: ${mail} \n Спосіб оплати: ${oplata} \n Місто: ${city} \n Пошта: ${post} \n Віділення: ${vidil} \n Коментар: ${comment} \n ${JSON.stringify(
    cart
  )}`;
  sendCartToTelegram(data);
  document.querySelector(".input-name").value = "";
  document.querySelector(".input-phone").value = "";
  document.querySelector(".input-mail").value = "";
  // document.querySelector("#input-oplata").value = "";
  // document.querySelector("#input-city").value = "";
  // document.querySelector("#input-post").value = "";
  // document.querySelector("#input-vidil").value = "";
  // document.querySelector("#input-comment").value = "";

  document.querySelector(".order-main-form").style.display = "flex";
  document.querySelector(".order-second-form").style.display = "none";

  document.querySelector("#cart-success").showModal();
}
const OrderPage = () => {
  const properties = useContext(Context);
  return (
    <div className="order-page">
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
                  size={item.size}
                ></CartItem>
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
            <button className="order-submit-btn" onClick={(e) => nextForm()}>
              Підтвердити &rarr;
            </button>
          </div>
          <div className="order-second-form col-lg-4">
            <p className="pib">2. Оплата та доставка</p>
            <select
              className="input-order input-name order-select"
              id="select-oplata"
            >
              <option
                className="select-placeholder"
                value="placeholder"
                disabled
                selected
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
            ></input>
            <select
              className="input-order input-mail order-select"
              id="select-post"
            >
              <option
                className="select-placeholder"
                value="placeholder"
                disabled
                selected
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
            ></input>
            <input
              id="input-comment"
              className="input-order input-mail"
              placeholder="Коментар до замовлення"
            ></input>
            <button
              className="order-submit-btn"
              onClick={(e) => sendCart(properties.cart)}
            >
              Оформити &rarr;
            </button>
          </div>
        </div>
      </div>
      <Modal setCart={properties.setCart}></Modal>
    </div>
  );
};

export default OrderPage;
