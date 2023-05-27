import Img1 from "../imgs/dress1.jpg";

const CartItem = ({ img, title, price, quantity }) => {
  return (
    <div className="row cart-main-row">
      <img className="col-lg-3 col-3 cart-img" alt="" src={img}></img>
      <div className=" col-lg-6 col-6">
        <p className="cart-title">{title}</p>
        <p className="cart-title">Кількість: {quantity} шт.</p>
        <p className="cart-price">{price} ₴</p>
      </div>
      <span className="col-lg-2 col-2 delete-cart-btn">x</span>
    </div>
  );
};
export default CartItem;
