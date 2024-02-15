"use client";

import { editItem, delItem } from "../../utils/admin_helper";

export default function AdminItem({
  item,
  setEditedItem,
  editedItem,
  type,
  setTovar,
}) {
  return (
    <div className="item" id={item.id}>
      <p className="item-articul">{item.article}</p>
      <p>{item.brand}</p>
      <p className="name">{item.name}</p>
      <p>{item.price}₴</p>
      <p>{item.amount} шт</p>
      <div className="info-div">
        <p>{item.description}</p>
      </div>
      <p className="item-sizes">
        {item.size.map(
          (size, index) =>
            `${size.size}${index === item.size.length - 1 ? "" : ", "}`
        )}
      </p>
      <p>{item.type}</p>
      <p>{item.additionaltype}</p>
      <div className="admin-img-div">
        {item.images.map((image) => {
          return (
            <img
              className="admin-img"
              alt={image}
              key={image.link}
              src={image.link}
            />
          );
        })}
      </div>
      <button
        className="edit-btn"
        onClick={(e) => {
          editItem(e, setEditedItem, editedItem, type);
        }}
      >
        Редагувати
      </button>
      <button onClick={(e) => delItem(e, setTovar)} className="del-btn">
        Видалити
      </button>
    </div>
  );
}
