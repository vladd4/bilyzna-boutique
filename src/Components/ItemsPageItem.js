import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Hooks/Context";
function setPageInfo(img, title, price, quantity, setProd, prod, id) {
  setProd({ id: id, title: title, img: img, price: price, quantity: quantity });
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
  const properties = useContext(Context);
  return (
    <Link
      to={properties.tovar}
      className={"col-sm-4 col-4 " + size}
      onClick={(e) => {
        setPageInfo(img, title, price, quantity, setProd, prod, id);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
      }}
      onMouseOver={() => {
        properties.setTovar(title);
      }}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="item-card"
        id={"item-" + id}
        data-id={id}
        onMouseOver={() => {
          document.querySelector(`#item-${id}`).style.backgroundImage =
            "url(https://photos.js.com.pl/photos/mediolano/s3/s3_69512-0-a79b0dae33.jpg)";
        }}
        onMouseOut={() => {
          document.querySelector(
            `#item-${id}`
          ).style.backgroundImage = `url(${img})`;
        }}
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
