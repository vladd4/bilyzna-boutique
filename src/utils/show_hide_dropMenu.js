export function showDrop(e, setIsClicked) {
  e.target
    .closest(".drop-li")
    .querySelector(".drop-menu-drop")
    .classList.add("drop-menu-drop-show");

  e.target.closest(".drop-li").querySelector(".drop-close-span").innerHTML =
    "&#8593;";
  setIsClicked(true);
}

export function hideDrop(e, setIsClicked) {
  e.target
    .closest(".drop-li")
    .querySelector(".drop-menu-drop")
    .classList.remove("drop-menu-drop-show");

  e.target
    .closest(".drop-li")
    .querySelector(".drop-close-span").innerHTML = `&#8250;`;
  setIsClicked(false);
}
