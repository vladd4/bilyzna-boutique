"use client";
import "@/styles/globals.css";

import Block2 from "@/../public/Asset2.png";
import Block3 from "@/../public/Asset3.png";
import ItemsPageItem from "./ItemsPageItem";
import { useState, useEffect, useContext } from "react";
import Skeleton from "./Skeleton";
import Context from "../hooks/Context";

import Image from "next/image";
import { hideHeader } from "@/utils/hide_cart_header";
import Description from "./Description";

import NoSuchProduct from "./NoSuchProduct";
import { useSearchParams } from "next/navigation";

function changeSize(clicked, setClicked) {
  setClicked(!clicked);
}
async function sortBy(setProducts, base) {
  const selectValue =
    document.querySelector(".sort-select").options[
      document.querySelector(".sort-select").selectedIndex
    ].value;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/${base}/${selectValue}`
  );
  const data = await response.json();
  setProducts([...data]);
}
export default function ItemsPage({ title, filtr, base, endpoint, info }) {
  const [clicked, setClicked] = useState(false);
  const searchParams = useSearchParams();

  const {
    getData,
    setProducts,
    products,
    prod,
    setProd,
    currentProducts,
    filtred,
    isLoading,
    setIsLoading,
    setFilterFlag,
  } = useContext(Context);

  useEffect(() => {
    if (searchParams.size === 0) {
      getData(setProducts, endpoint, setIsLoading, setFilterFlag);
      sessionStorage.removeItem("prodPage");
    }
  }, [
    endpoint,
    getData,
    setProducts,
    title,
    setFilterFlag,
    setIsLoading,
    searchParams,
  ]);
  return (
    <div className="items-page container-fluid" onClick={hideHeader}>
      <div
        className={base === "sale" || base === "news" ? "row center" : "row"}
      >
        {filtr}
        <div className="main-block col-lg-10">
          <div className="main-block-h">
            <h2 className="items-page-h">{title}</h2>
            <div
              className={`filtr-block ${
                base === "sale" || base === "news" ? "filtr-block-end" : ""
              }`}
            >
              {base === "sale" || base === "news" ? null : (
                <div className="filt-text">
                  <li className="nav-item ">
                    <button
                      disabled
                      className="nav-link"
                      id="sort-btn"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Сортуй
                    </button>
                  </li>
                  <select
                    name="select"
                    className="sort-select"
                    onChange={() => sortBy(setProducts, base)}
                  >
                    <option value="new">найпопулярніші</option>
                    <option value="cheap">від найдешевших</option>

                    <option value="exp">від найдорожчих</option>
                  </select>
                </div>
              )}

              <div className="filt-icons">
                <Image
                  width={32}
                  height={32}
                  onClick={() => changeSize(clicked, setClicked)}
                  className="filt-icon-img"
                  alt="2 block"
                  src={Block2}
                ></Image>
                <Image
                  width={32}
                  height={32}
                  onClick={() => changeSize(clicked, setClicked)}
                  className="filt-icon-img"
                  alt="3 block"
                  src={Block3}
                ></Image>
              </div>
            </div>
          </div>
          <div className="row">
            {isLoading ? (
              [...new Array(9)].map((_, index) => {
                return <Skeleton key={index} />;
              })
            ) : filtred ? (
              currentProducts.length >= 1 ? (
                currentProducts.map((item) => {
                  return (
                    <ItemsPageItem
                      key={item.id}
                      id={item.id}
                      title={item.name}
                      brand={item.brand}
                      description={item.description}
                      article={item.article}
                      sizes={item.size}
                      price={item.price}
                      images={item.images}
                      quantity={item.amount}
                      size={clicked ? "col-lg-4" : "col-lg-3"}
                      setProd={setProd}
                      prod={prod}
                      base={base}
                    />
                  );
                })
              ) : (
                <NoSuchProduct />
              )
            ) : products.length >= 1 ? (
              products.map((item) => {
                return (
                  <ItemsPageItem
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    brand={item.brand}
                    description={item.description}
                    article={item.article}
                    price={item.price}
                    sizes={item.size}
                    images={item.images}
                    quantity={item.amount}
                    size={clicked ? "col-lg-4" : "col-lg-3"}
                    setProd={setProd}
                    prod={prod}
                    base={base}
                  ></ItemsPageItem>
                );
              })
            ) : (
              [...new Array(7)].map((_, index) => {
                return <Skeleton key={index} />;
              })
            )}
          </div>
        </div>
      </div>
      <div className="filtr-down-block">
        <div className="row">
          <button
            className="filt-btn-down"
            onClick={() => {
              document
                .querySelector(".side-block")
                .classList.add("side-block-show");
            }}
          >
            Фільтруй
          </button>
        </div>
      </div>
      <Description info={info} />
    </div>
  );
}
