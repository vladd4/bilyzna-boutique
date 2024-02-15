export const showImage = (image) => {
  document.querySelector(".item-view-popup").style.display = "grid";
  document.querySelector(".item-view-popup img").src = image;
};

const getSize = (buttons) => {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].disabled) return buttons[i].textContent;
  }
};

export const addToCart = (
  cart,
  setCart,
  title,
  price,
  img,
  quantity,
  id,
  buttons
) => {
  if (quantity > 1) {
    let start_price = price;
    for (let i = 0; i < quantity - 1; i++) {
      price += start_price;
    }
  }
  let size = getSize(buttons);
  if (!size) {
    alert("Виберіть розмір будь-ласка!");
    return;
  }
  let existingItemIndex = cart.findIndex(
    (item) => item.id === id && item.size === size
  );
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
    cart[existingItemIndex].price += price;
  } else {
    cart.push({
      id: id,
      title: title,
      img: img,
      price: price,
      quantity: quantity,
      size: size,
    });
  }
  setCart([...cart]);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  document.querySelector(".btn-page").classList.add("btn-page-added");
  document.querySelector(".btn-page").disabled = true;
};

export const handleButtonClick = (index, activeIndex, setActiveIndex) => {
  if (index === activeIndex) return;
  if (activeIndex !== null) {
    document.querySelector(`#size-${activeIndex}`).disabled = false;
    document
      .querySelector(`#size-${activeIndex}`)
      .classList.remove("size-clicked");
  }
  document.querySelector(`#size-${index}`).disabled = true;
  document.querySelector(`#size-${index}`).classList.add("size-clicked");
  setActiveIndex(index);
};

export async function getProductInfo(setSizes, id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/id/${id}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setSizes(data);
  } catch (error) {
    console.log("fetch admin error:", error);
  }
}
