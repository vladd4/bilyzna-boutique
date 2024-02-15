export function hideHeader(e) {
  if (!document.querySelector(".drop-menu-nav").contains(e.target)) {
    document.querySelector(".drop-menu-nav").classList.remove("drop-show");
  }
}
export function hideCart() {
  if (document.querySelector(".changed-components")) {
    document.querySelector(".changed-components").style.opacity = "1";
  }
  if (document.querySelector(".items-page")) {
    document.querySelector(".items-page").style.opacity = "1";
  }
  if (document.querySelector(".product-page")) {
    document.querySelector(".product-page").style.opacity = "1";
  }
  if (document.querySelector(".order-page")) {
    document.querySelector(".order-page").style.opacity = "1";
  }
  if (document.querySelector(".return-block")) {
    document.querySelector(".return-block").style.opacity = "1";
  }
  if (document.querySelector(".delivery-block")) {
    document.querySelector(".delivery-block").style.opacity = "1";
  }
  document.querySelector(".navbar").style.opacity = "1";
  document.querySelector(".navbar").style.pointerEvents = "auto";
  document.querySelector(".newsletter-div").style.opacity = "1";
  document.querySelector(".newsletter-div").style.pointerEvents = "auto";
  document.querySelector("#footer").style.opacity = "1";
  document.querySelector("#footer").style.pointerEvents = "auto";
  document.querySelector(".banner").style.opacity = "1";
  document.querySelector(".banner").style.pointerEvents = "auto";
  if (document.querySelector(".breadcrumbs")) {
    document.querySelector(".breadcrumbs").style.opacity = "1";
    document.querySelector(".breadcrumbs").style.pointerEvents = "auto";
  }
  document.querySelector(".links-row").style.opacity = "1";
  document.querySelector(".links-row").style.pointerEvents = "auto";
  document.body.style.overflow = "auto";
  document.querySelector(".cart").classList.remove("show-cart");
}
export function showCart() {
  document.querySelector(".cart").classList.add("show-cart");
  if (document.querySelector(".changed-components")) {
    document.querySelector(".changed-components").style.opacity = "0.3";
  }
  if (document.querySelector(".items-page")) {
    document.querySelector(".items-page").style.opacity = "0.3";
  }
  if (document.querySelector(".product-page")) {
    document.querySelector(".product-page").style.opacity = "0.3";
  }
  if (document.querySelector(".order-page")) {
    document.querySelector(".order-page").style.opacity = "0.3";
  }
  if (document.querySelector(".return-block")) {
    document.querySelector(".return-block").style.opacity = "0.3";
  }
  if (document.querySelector(".delivery-block")) {
    document.querySelector(".delivery-block").style.opacity = "0.3";
  }
  document.querySelector(".navbar").style.opacity = "0.3";
  document.querySelector(".navbar").style.pointerEvents = "none";
  document.querySelector(".newsletter-div").style.opacity = "0.3";
  document.querySelector(".newsletter-div").style.pointerEvents = "none";
  document.querySelector("#footer").style.opacity = "0.3";
  document.querySelector("#footer").style.pointerEvents = "none";
  document.querySelector(".banner").style.opacity = "0.3";
  document.querySelector(".banner").style.pointerEvents = "none";
  if (document.querySelector(".breadcrumbs")) {
    document.querySelector(".breadcrumbs").style.opacity = "0.3";
    document.querySelector(".breadcrumbs").style.pointerEvents = "none";
  }
  document.querySelector(".links-row").style.opacity = "0.3";
  document.querySelector(".links-row").style.pointerEvents = "none";
  document.body.style.overflow = "hidden";
}

export function showMenu() {
  document.querySelector(".drop-menu-nav").classList.add("drop-show");
}

export function hideImage() {
  document.querySelector(".item-view-popup").style.display = "none";
}
