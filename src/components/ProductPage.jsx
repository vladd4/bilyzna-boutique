"use client";

import { useState, useContext, useEffect } from "react";
import ItemView from "./ItemView";
import Context from "../hooks/Context";
import {
  showImage,
  addToCart,
  handleButtonClick,
  getProductInfo,
} from "../utils/productPage_helpers";

import { useSearchParams } from "next/navigation";
import { hideHeader } from "@/utils/hide_cart_header";
import ProdSkeleton from "./ProdSkeleton";

import { useDispatch } from "react-redux";
import { setAlertText, setShowAlert } from "@/redux/slices/alertSlice";

export default function ProductPage() {
  const properties = useContext(Context);
  const [quantValue, setQuantValue] = useState(1);
  const [sizeBack, setSizeBack] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const params = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getProductInfo(setSizeBack, params.get("id"));
  }, []);

  return (
    <>
      {sizeBack ? (
        sizeBack && (
          <div
            className="product-page container-fluid"
            id={sizeBack.id}
            onClick={hideHeader}
          >
            <div className="row prod-row">
              <div className="row prod-img-row col-lg-7">
                <div className="prod-image-container-1 col-lg-3 col-sm-3 col-12">
                  {sizeBack &&
                    sizeBack.images.map((image) => {
                      return (
                        <div
                          onClick={() => setCurrentImage(image.link)}
                          className="prod-image-inner"
                          key={image.link}
                          style={{
                            backgroundImage: `url(${image.link})`,
                            opacity: `${
                              currentImage === image.link ? "0.5" : ""
                            }`,
                          }}
                        ></div>
                      );
                    })}
                </div>
                <div
                  onClick={() =>
                    showImage(
                      currentImage ? currentImage : sizeBack.images[0].link
                    )
                  }
                  className="prod-image-container col-lg-7 col-sm-7 col-12"
                  style={{
                    backgroundImage: `url(${
                      currentImage ? currentImage : sizeBack.images[0].link
                    })`,
                  }}
                ></div>
              </div>
              <div className="col-lg-4 prod-page-info">
                <h3 className="prod-page-h">{sizeBack.name}</h3>
                <p className="prod-page-art">
                  Виробник: {sizeBack.brand.toUpperCase()}
                </p>
                <p className="prod-page-art">Доставка: 7-9 днів очікування</p>
                <p className="prod-page-size">
                  Розмір:{" "}
                  {sizeBack?.size.map((size, index) => (
                    <button
                      className="size-btn"
                      id={"size-" + index}
                      key={index}
                      onClick={() => {
                        handleButtonClick(index, activeIndex, setActiveIndex);
                      }}
                      disabled={activeIndex === index}
                    >
                      {size.size.toUpperCase()}
                    </button>
                  ))}
                </p>
                <p className="prod-page-price">Ціна: {sizeBack.price} грн.</p>
                <p className="prod-page-price prod-page-quantity">
                  Кількість: {sizeBack.amount} шт.
                </p>
                <div className="quantity-wrapper">
                  <button
                    className="quantity-btn minus"
                    onClick={() => {
                      if (quantValue > 1) setQuantValue(quantValue - 1);
                    }}
                  >
                    -
                  </button>
                  <input
                    onChange={(e) => setQuantValue(e.target.value)}
                    className="quantity-input-value"
                    value={quantValue}
                  />
                  <button
                    className="quantity-btn plus"
                    onClick={() => {
                      const maxQuantity = sizeBack.amount;
                      if (quantValue < maxQuantity)
                        setQuantValue(quantValue + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className="prod-page-cart-btn btn-page"
                  onClick={() => {
                    addToCart(
                      properties.cart,
                      properties.setCart,
                      sizeBack.name,
                      sizeBack.price,
                      sizeBack.images[0].link,
                      quantValue,
                      sizeBack.id,
                      document.querySelectorAll(".size-btn")
                    );
                    dispatch(setAlertText("Товар доданий до корзини!"));
                    dispatch(setShowAlert(true));
                  }}
                >
                  Додати в кошик
                </button>
                <div className="prod-page-small-info">
                  <h5 className="prod-info-h">Опис товару: </h5>
                  <p className="prod-info-p">{sizeBack.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="product-page container">
          <div className="row prod-row">
            <ProdSkeleton />
          </div>
        </div>
      )}
      <ItemView />
    </>
  );
}
