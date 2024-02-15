"use client";

import { useEffect, useState } from "react";
import { getBase, addItem, updateItem } from "../../utils/admin_helper";
import AdminItem from "./AdminItem";

const AdminPanelView = ({ tovar, setTovar, title, type }) => {
  const [editedItem, setEditedItem] = useState({});
  useEffect(() => {
    getBase(setTovar, type);
  }, [type, setTovar]);
  useEffect(() => {
    if (Object.keys(editedItem).length !== 0) {
      document.querySelector("#item-art").value = editedItem.article;
      document.querySelector("#item-name").value = editedItem.name;
      document.querySelector("#item-price").value = editedItem.price;
      document.querySelector("#item-quantity").value = editedItem.amount;
      document.querySelector("#item-info").value = editedItem.description;
      document.querySelector("#item-size").value = editedItem.size.map(
        (size) => size.size
      );
      document.querySelector("#item-img").value = editedItem.images.map(
        (image) => image.link
      );
      document.querySelector("#item-prod").value = editedItem.brand;
      document.querySelector("#item-type").value = editedItem.type;
      if (document.querySelector("#item-typeAdd")) {
        document.querySelector("#item-typeAdd").value =
          editedItem.additionaltype;
      }
    }
  }, [editedItem]);
  return (
    <div className="bilyzna-block">
      <h5>{title}</h5>
      <form onSubmit={(e) => e.preventDefault()}>
        <div id="add-item-form">
          <div className="add-wrapper row">
            <div className="col-lg-6 col-11">
              <input
                className="input-admin"
                type="text"
                id="item-art"
                placeholder="Артикул"
              />
              <input
                className="input-admin"
                type="text"
                id="item-prod"
                placeholder="Виробник"
              />
              <input
                className="input-admin"
                type="text"
                id="item-name"
                placeholder="Назва"
              />
              <input
                className="input-admin"
                type="text"
                id="item-price"
                placeholder="Ціна"
              />
              <input
                className="input-admin"
                type="text"
                id="item-quantity"
                placeholder="Кількість"
              />
              <textarea
                className="input-admin"
                type="text"
                id="item-img"
                placeholder="Фотографії"
              />
            </div>
            <div className="col-lg-6 col-11">
              <textarea
                className="input-admin"
                type="text"
                id="item-size"
                placeholder="Розмір"
              />
              <select
                style={{
                  width: "99.3%",
                  marginBottom: "10px",
                  padding: "1% 2%",
                }}
                className="input-admin"
                id="item-type"
              >
                <option className="select-placeholder" value="placeholder">
                  Тип
                </option>
                <option value="bra">бюсти</option>
                <option value="womunderwear">жіночі труси</option>
                <option value="pijamas">піжами</option>
                <option value="robe">халати</option>
                <option value="nightgowns">нічні сорочки</option>
                <option value="corrunderwear">корегуюча білизна</option>
                <option value="manunderwear">чоловічі труси</option>
                <option value="manpijamas">чоловічі піжами</option>
                <option value="manrobe">чоловічі халати</option>
                <option value="manshirt">чоловічі майки</option>
                <option value="womswimsuit">жіночі купальники</option>
                <option value="manswimsuit">чоловічі купальники</option>
              </select>
              {type === "bra" ? (
                <select
                  style={{
                    width: "99.3%",
                    marginBottom: "10px",
                    padding: "1% 2%",
                  }}
                  className="input-admin"
                  id="item-typeAdd"
                >
                  <option className="select-placeholder" value="placeholder">
                    (м'які, ущільнені, напівщільні, push-up)
                  </option>
                  <option value="soft">м'які</option>
                  <option value="yshilneni">ущільнені</option>
                  <option value="napivyshilneni">напівщільні</option>
                  <option value="push">push-up</option>
                </select>
              ) : null}
              {type === "womunderwear" ? (
                <select
                  style={{
                    width: "99.3%",
                    marginBottom: "10px",
                    padding: "1% 2%",
                  }}
                  className="input-admin"
                  id="item-typeAdd"
                >
                  <option className="select-placeholder" value="placeholder">
                    (бразиліана, сліпи, бікіні, стрінги)
                  </option>
                  <option value="braz">бразиліана</option>
                  <option value="slip">сліпи</option>
                  <option value="bikini">бікіні</option>
                  <option value="strings">стрінги</option>
                </select>
              ) : null}
              {type === "corrunderwear" ? (
                <select
                  style={{
                    width: "95%",
                    marginBottom: "10px",
                    padding: "1% 2%",
                  }}
                  className="input-admin"
                  id="item-typeAdd"
                >
                  <option className="select-placeholder" value="placeholder">
                    (труси, корсети, комбінації)
                  </option>
                  <option value="pants">труси</option>
                  <option value="cors">корсети</option>
                  <option value="comb">комбінації</option>
                </select>
              ) : null}
              <textarea
                className="input-admin"
                type="text"
                id="item-info"
                placeholder="Опис"
              />
            </div>
            <button
              className="admin-add"
              onClick={() => {
                addItem(setTovar, type);
              }}
            >
              Додати
            </button>
            <button
              className="admin-save"
              onClick={() => {
                updateItem(editedItem, setTovar, type);
              }}
            >
              Зберегти
            </button>
          </div>
        </div>
      </form>
      <div id="bilyzna" className="add-item-list">
        {tovar.map((item, index) => {
          return (
            <AdminItem
              key={index}
              item={item}
              setEditedItem={setEditedItem}
              editedItem={editedItem}
              type={type}
              setTovar={setTovar}
            />
          );
        })}
      </div>
    </div>
  );
};
export default AdminPanelView;
