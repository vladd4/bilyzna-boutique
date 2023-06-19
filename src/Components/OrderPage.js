import CartItem from "./CartItem";

function nextForm() {
  document.querySelector(".order-main-form").style.display = "none";
  document.querySelector(".order-second-form").style.display = "flex";
}

const OrderPage = ({ cart, setCart }) => {
  return (
    <div className="order-page">
      <h1 className="order-h">Мій кошик</h1>
      <div className="order-main container">
        <div className="row">
          <div className="order-main-prod col-lg-7">
            {cart.map((item) => {
              return (
                <CartItem
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                  setCart={setCart}
                  size={item.size}
                ></CartItem>
              );
            })}
            <p align="left" className="order-main-total">
              Загальна вартість{" "}
              <b className="order-total-bold">
                {cart.reduce((acc, total) => acc + total.price, 0)} ₴
              </b>
            </p>
          </div>
          <div className="order-main-form col-lg-4">
            <p className="pib">1. Контактні дані</p>
            <input
              className="input-order input-name"
              placeholder="Введіть ім'я та прізвище*"
              required
            ></input>
            <input
              className="input-order input-phone"
              placeholder="Введіть телефон*"
              required
            ></input>
            <input
              className="input-order input-mail"
              placeholder="Введіть пошту"
            ></input>
            <button className="order-submit-btn" onClick={(e) => nextForm()}>
              Підтвердити &rarr;
            </button>
          </div>
          <div className="order-second-form col-lg-4">
            <p className="pib">2. Оплата та доставка</p>
            <input
              className="input-order input-name"
              placeholder="Виберіть спосіб оплати*"
              required
            ></input>
            <input
              className="input-order input-phone"
              placeholder="Введіть місто*"
              required
            ></input>
            <input
              className="input-order input-mail"
              placeholder="Введіть пошту*"
            ></input>
            <input
              className="input-order input-phone"
              placeholder="Введіть номер віділення*"
              required
            ></input>
            <input
              className="input-order input-mail"
              placeholder="Коментар до замовлення"
            ></input>
            <button className="order-submit-btn">Оформити &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
