import { getAuthToken } from "./auth_helper";

export async function addItem(setBilyzna, endPoint) {
  let art = document.querySelector("#item-art").value;
  let name = document.querySelector("#item-name").value.replace("/", " ");
  let prod = document.querySelector("#item-prod").value.toUpperCase();
  let price = document.querySelector("#item-price").value;
  let quant = document.querySelector("#item-quantity").value;
  let info = document.querySelector("#item-info").value;
  let sizeString = document.querySelector("#item-size").value.trim();
  let sizeArray = sizeString
    .split(",")
    .map((item) => ({ size: item.trim().toUpperCase() }));
  let imageString = document.querySelector("#item-img").value.trim();
  let imageArray = imageString
    .split(",")
    .map((item) => ({ link: item.trim() }));
  let type_select = document.getElementById("item-type");
  let type = type_select.value;
  let typeAdd = document.querySelector("#item-typeAdd")?.value;

  const data = {
    name,
    brand: prod,
    article: art,
    amount: quant,
    price,
    type,
    additionaltype: typeAdd,
    size: sizeArray,
    description: info,
    images: imageArray,
  };
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/admin/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()},`,
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      getBase(setBilyzna, endPoint);
      document.querySelector("#item-art").value = "";
      document.querySelector("#item-name").value = "";
      document.querySelector("#item-price").value = "";
      document.querySelector("#item-quantity").value = "";
      document.querySelector("#item-info").value = "";
      document.querySelector("#item-size").value = "";
      document.querySelector("#item-img").value = "";
      document.querySelector("#item-prod").value = "";
      document.querySelector("#item-type").value = "placeholder";
      document.querySelector("#item-typeAdd").value = "placeholder";
    } else {
      alert("Не вдалося додати товар. Спробуйте увійти знову!");
      throw new Error("Failed to insert data");
    }
  });
}
export async function getBase(setBilyzna, endPoint) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/${endPoint}/new`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${getAuthToken()}` },
      }
    );
    const data = await response.json();
    setBilyzna([...data]);
  } catch (error) {
    console.log("fetch admin error:", error);
    alert("Час сесії сплив. Увійдіть знову!");
  }
}
export async function getEdit(id, setEditedItem) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAuthToken()},`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    setEditedItem(data);
  } catch (error) {
    console.log(error);
  }
}
export async function postEdit(id, editedItem, setBilyzna, endPoint) {
  fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/admin/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()},`,
    },
    body: JSON.stringify(editedItem),
  })
    .then((response) => {
      if (response.ok) {
        getBase(setBilyzna, endPoint);
      } else {
        throw new Error("Failed to insert data");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
export async function delItem(e, setBilyzna) {
  let id = e.target.closest(".item").id;
  let art = e.target
    .closest(".item")
    .querySelector(".item-articul").textContent;
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/admin/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getAuthToken()},`,
    },
  })
    .then((response) => {
      if (response.ok) {
        setBilyzna((current) => current.filter((item) => item.article !== art));
      } else {
        throw new Error("Failed to delete data");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
export async function editItem(e, setEditedItem) {
  let block = e.target.closest(".item");
  let id = block.id;
  await getEdit(id, setEditedItem);
  document.querySelector(".admin-add").style.display = "none";
  document.querySelector(".admin-save").style.display = "block";
}
export async function updateItem(editedItem, setBilyzna, endPoint) {
  let art = document.querySelector("#item-art").value;
  let name = document.querySelector("#item-name").value.replace("/", " ");
  let prod = document.querySelector("#item-prod").value.toUpperCase();
  let price = document.querySelector("#item-price").value;
  let quant = document.querySelector("#item-quantity").value;
  let info = document.querySelector("#item-info").value;
  let sizeString = document.querySelector("#item-size").value.trim();
  let sizeArray = sizeString
    .split(",")
    .map((item) => ({ size: item.trim().toUpperCase() }));
  let imageString = document.querySelector("#item-img").value.trim();
  let imageArray = imageString
    .split(",")
    .map((item) => ({ link: item.trim() }));
  let type_select = document.getElementById("item-type");
  let type = type_select.value;
  let typeAdd = document.querySelector("#item-typeAdd")?.value;

  editedItem.name = name;
  editedItem.brand = prod;
  editedItem.article = art;
  editedItem.amount = quant;
  editedItem.price = price;
  editedItem.type = type;
  editedItem.additionaltype = typeAdd;
  editedItem.size = sizeArray;
  editedItem.description = info;
  editedItem.images = imageArray;

  await postEdit(editedItem.id, editedItem, setBilyzna, endPoint);

  document.querySelector("#item-art").value = "";
  document.querySelector("#item-name").value = "";
  document.querySelector("#item-price").value = "";
  document.querySelector("#item-quantity").value = "";
  document.querySelector("#item-info").value = "";
  document.querySelector("#item-size").value = "";
  document.querySelector("#item-img").value = "";
  document.querySelector("#item-prod").value = "";
  document.querySelector("#item-type").value = "placeholder";
  if (document.querySelector("#item-typeAdd")) {
    document.querySelector("#item-typeAdd").value = "placeholder";
  }
  document.querySelector(".admin-add").style.display = "block";
  document.querySelector(".admin-save").style.display = "none";
}
