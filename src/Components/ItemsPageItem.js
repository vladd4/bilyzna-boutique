import { Link } from "react-router-dom";

function setPageInfo(img, title, price, quantity, setProd, prod) {
  setProd({ title: title, img: img, price: price, quantity: quantity });
  console.log(prod);
}
const ItemsPageItem = ({
  id,
  title,
  price,
  img,
  size,
  quantity,
  description,
  setProd,
  prod,
}) => {
  return (
    <Link
      to="dress"
      className={"col-sm-6 col-4 " + size}
      onClick={(e) => {
        setPageInfo(img, title, price, quantity, setProd, prod);
      }}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="item-card"
        id={id}
      >
        <p className="item-card-hover">Переглянути</p>
      </div>
      <div className="item-card-wrapper">
        <div className="item-card-text">
          <h2 className="item-card-brand">{description}</h2>
          <h2 className="item-card-h">{title}</h2>
          <p className="item-card-a">{price} ₴</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemsPageItem;
