import { useEffect, useState } from "react";

async function addItem(bilyzna, setBilyzna) {
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
  await fetch("http://localhost:8080/admin/bra", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
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
      } else {
        throw new Error("Failed to insert data");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
async function getBase(setBilyzna) {
  const response = await fetch("http://localhost:8080/admin/bra", {
    method: "GET",
  });
  const data = await response.json();
  setBilyzna([...data]);
}
async function getEdit(id, setEditedItem) {
  try {
    const response = await fetch(`http://localhost:8080/admin/bra/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    setEditedItem(data);
  } catch (error) {
    console.log(error);
  }
}
async function postEdit(id, editedItem, setBilyzna) {
  fetch(`http://localhost:8080/admin/bra/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedItem),
  })
    .then((response) => {
      if (response.ok) {
        getBase(setBilyzna);
      } else {
        throw new Error("Failed to insert data");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
async function delItem(e, setBilyzna) {
  let id = e.target.closest(".item").id;
  let art = e.target
    .closest(".item")
    .querySelector(".item-articul").textContent;
  // Send a DELETE request to the backend API
  await fetch(`http://localhost:8080/admin/bra/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        // Update the local state or re-fetch the data if needed
        setBilyzna((current) => current.filter((item) => item.article !== art));
      } else {
        throw new Error("Failed to delete data");
      }
    })
    .catch((error) => {
      // Handle error conditions
      console.log(error);
    });
}
async function editItem(e, setEditedItem) {
  let block = e.target.closest(".item");
  let id = block.id;
  await getEdit(id, setEditedItem);
  // No need to access editedItem here anymore
  document.querySelector(".admin-add").style.display = "none";
  document.querySelector(".admin-save").style.display = "block";
}
function updateItem(editedItem, setForce, setBilyzna) {
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

  editedItem.name = name;
  editedItem.brand = prod;
  editedItem.article = art;
  editedItem.amount = quant;
  editedItem.price = price;
  editedItem.type = type;
  editedItem.size = size;
  editedItem.description = info;
  editedItem.image1 = img1;
  editedItem.image2 = img2;

  postEdit(editedItem.id, editedItem, setBilyzna);

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
  const [setForce] = useState();
  const [editedItem, setEditedItem] = useState({});
  useEffect(() => {
    getBase(setTovar);
  }, [setTovar]);
  useEffect(() => {
    // Update input values when editedItem changes
    if (Object.keys(editedItem).length !== 0) {
      document.querySelector("#item-art").value = editedItem.article;
      document.querySelector("#item-name").value = editedItem.name;
      document.querySelector("#item-price").value = editedItem.price;
      document.querySelector("#item-quantity").value = editedItem.amount;
      document.querySelector("#item-info").value = editedItem.description;
      document.querySelector("#item-size").value = editedItem.size;
      document.querySelector("#item-img1").value = editedItem.image1;
      document.querySelector("#item-prod").value = editedItem.brand;
      document.querySelector("#item-img2").value = editedItem.image2;
      document.querySelector("#item-type").value = editedItem.type;
    }
  }, [editedItem]);
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
                updateItem(editedItem, setForce, setTovar, tovar);
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
            <>
              <div class="item" id={item.id}>
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
                    editItem(e, setEditedItem, editedItem);
                  }}
                >
                  Редагувати
                </button>
                <button onClick={(e) => delItem(e, setTovar)} class="del-btn">
                  Видалити
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default AdminPanelView;
