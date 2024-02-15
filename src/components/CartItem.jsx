"use client";

function removeFromCart(setCart, id, size, cart) {
  const newCart = cart.filter((item) => item.id !== id || item.size !== size);
  setCart(newCart);
  sessionStorage.setItem("cart", JSON.stringify(newCart));
}

export default function CartItem({
  img,
  title,
  price,
  quantity,
  id,
  setCart,
  size,
  cart,
}) {
  return (
    <div className="row cart-main-row" id={id}>
      <img className="col-lg-4 col-4 cart-img" alt="" src={img}></img>
      <div className=" col-lg-6 col-6">
        <p className="cart-title">{title}</p>
        <p className="cart-title">Кількість: {quantity} шт.</p>
        <p className="cart-title">Розмір: {size}</p>
        <p className="cart-price">{price} ₴</p>
      </div>
      <span
        className="col-lg-2 col-2 delete-cart-btn"
        onClick={() => {
          removeFromCart(setCart, id, size, cart);
        }}
      >
        x
      </span>
    </div>
  );
}
