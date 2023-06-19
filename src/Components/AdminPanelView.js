import { useState } from "react";

function addItem(bilyzna, setBilyzna) {
  let art = document.querySelector("#item-art").value;
  let name = document.querySelector("#item-name").value;
  let prod = document.querySelector("#item-prod").value;
  let price = document.querySelector("#item-price").value;
  let quant = document.querySelector("#item-quantity").value;
  let info = document.querySelector("#item-info").value;
  let size = document.querySelector("#item-size").value;
  let img1 = document.querySelector("#item-img1").value;
  let img2 = document.querySelector("#item-img2").value;
  let type = document.querySelector("#item-type").value;
  setBilyzna([
    ...bilyzna,
    {
      name: name,
      brand: prod,
      article: art,
      amount: quant,
      price: price,
      type: type,
      size: size,
      description: info,
      image1: img1,
      image2: img2,
    },
  ]);
  const formData = {
    name: name,
    brand: prod,
    article: art,
    amount: quant,
    price: price,
    type: type,
    size: size,
    description: info,
    image1: img1,
    image2: img2,
  };
  fetch("http://localhost:8080/admin/bra", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
      } else {
        throw new Error("Failed to insert data");
      }
    })
    .catch((error) => {
      // Handle error conditions
    });
  document.querySelector("#item-art").value = "";
  document.querySelector("#item-name").value = "";
  document.querySelector("#item-price").value = "";
  document.querySelector("#item-quantity").value = "";
  document.querySelector("#item-info").value = "";
  document.querySelector("#item-size").value = "";
  document.querySelector("#item-img1").value = "";
  document.querySelector("#item-prod").value = "";
  document.querySelector("#item-img2").value = "";
  document.querySelector("#item-type").value = "";
}
function delItem(e, setBilyzna) {
  let art = e.target
    .closest(".item")
    .querySelector(".item-articul").textContent;
  setBilyzna((current) => current.filter((item) => item.article !== art));
}
function editItem(e, bilyzna) {
  let block = e.target.closest(".item");
  let art = block.querySelector(".item-articul").textContent;
  let new_bilyzna = bilyzna.filter((item) => item.article === art);
  document.querySelector("#item-art").value = new_bilyzna[0].article;
  document.querySelector("#item-name").value = new_bilyzna[0].name;
  document.querySelector("#item-price").value = new_bilyzna[0].price;
  document.querySelector("#item-quantity").value = new_bilyzna[0].amount;
  document.querySelector("#item-info").value = new_bilyzna[0].description;
  document.querySelector("#item-size").value = new_bilyzna[0].size;
  document.querySelector("#item-img1").value = new_bilyzna[0].image1;
  document.querySelector("#item-prod").value = new_bilyzna[0].brand;
  document.querySelector("#item-img2").value = new_bilyzna[0].image2;
  document.querySelector("#item-type").value = new_bilyzna[0].type;

  document.querySelector(".admin-add").style.display = "none";
  document.querySelector(".admin-save").style.display = "block";
}
function updateItem(bilyzna, forceUpdate) {
  let art = document.querySelector("#item-art").value;
  let name = document.querySelector("#item-name").value;
  let prod = document.querySelector("#item-prod").value;
  let price = document.querySelector("#item-price").value;
  let quant = document.querySelector("#item-quantity").value;
  let info = document.querySelector("#item-info").value;
  let size = document.querySelector("#item-size").value;
  let img1 = document.querySelector("#item-img1").value;
  let img2 = document.querySelector("#item-img2").value;
  let type = document.querySelector("#item-type").value;
  for (let i = 0; i < bilyzna.length; i++) {
    if (bilyzna[i].article === art) {
      bilyzna[i].name = name;
      bilyzna[i].brand = prod;
      bilyzna[i].price = price;
      bilyzna[i].amount = quant;
      bilyzna[i].description = info;
      bilyzna[i].size = size;
      bilyzna[i].image1 = img1;
      bilyzna[i].image2 = img2;
      bilyzna[i].type = type;
    }
  }
  forceUpdate(new Date());
  document.querySelector("#item-art").value = "";
  document.querySelector("#item-name").value = "";
  document.querySelector("#item-price").value = "";
  document.querySelector("#item-quantity").value = "";
  document.querySelector("#item-info").value = "";
  document.querySelector("#item-size").value = "";
  document.querySelector("#item-img1").value = "";
  document.querySelector("#item-prod").value = "";
  document.querySelector("#item-img2").value = "";
  document.querySelector("#item-type").value = "";

  document.querySelector(".admin-add").style.display = "block";
  document.querySelector(".admin-save").style.display = "none";
}
function preventDef(e) {
  e.preventDefault();
}
const AdminPanelView = ({ tovar, setTovar }) => {
  const [force, forceUpdate] = useState();
  return (
    <div className="bilyzna-block">
      <form
        onSubmit={(e) => {
          preventDef(e);
        }}
      >
        <div id="add-item-form">
          <div class="add-wrapper row">
            <div className="col-lg-6">
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
              <input
                className="input-admin"
                type="text"
                id="item-img1"
                placeholder="Фото №1"
              />
            </div>
            <div className="col-lg-6">
              <input
                className="input-admin"
                type="text"
                id="item-img2"
                placeholder="Фото №2"
              />
              <input
                className="input-admin"
                type="text"
                id="item-size"
                placeholder="Розмір"
              />
              <input
                className="input-admin"
                type="text"
                id="item-type"
                placeholder="Тип"
              />
              <input
                className="input-admin"
                type="text"
                id="item-info"
                placeholder="Опис"
              />
            </div>
            <button
              className="admin-add"
              onClick={(e) => {
                addItem(tovar, setTovar);
              }}
            >
              Додати
            </button>
            <button
              className="admin-save"
              onClick={(e) => {
                updateItem(tovar, forceUpdate);
              }}
            >
              Зберегти
            </button>
          </div>
        </div>
      </form>
      <div id="bilyzna" class="add-item-list">
        {tovar.map((item) => {
          return (
            <div class="item">
              <p className="item-articul">{item.article}</p>
              <p>{item.brand}</p>
              <p className="name">{item.name}</p>
              <p>{item.price}₴</p>
              <p>{item.amount} шт</p>
              <div className="info-div">
                <p>{item.description}</p>
              </div>
              <p>{item.size}</p>
              <p>{item.type}</p>
              <div>
                <p>{item.image1}</p>
                <p>{item.image2}</p>
              </div>
              <button
                class="edit-btn"
                onClick={(e) => {
                  editItem(e, tovar);
                }}
              >
                Редагувати
              </button>
              <button onClick={(e) => delItem(e, setTovar)} class="del-btn">
                Видалити
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AdminPanelView;
