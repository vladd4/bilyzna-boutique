"use client";

import Link from "next/link";
import Image from "next/image";

import { useContext } from "react";
import Context from "../hooks/Context";

import SaleIcon from "@/../public/sale_icon.png";
import NewsIcon from "@/../public/news.png";
import { useRouter } from "next/navigation";

function setPageInfo(
  images,
  title,
  brand,
  price,
  quantity,
  setProd,
  id,
  description,
  article,
  sizes,
  router
) {
  setProd({
    id,
    title,
    brand,
    images,
    price,
    quantity,
    description,
    article,
    sizes,
  });
  sessionStorage.setItem(
    "prodPage",
    JSON.stringify({
      id,
      title,
      brand,
      images,
      price,
      quantity,
      description,
      article,
      sizes,
    })
  );
  router.push({
    pathname: `${base}/${properties.tovar}`,
    query: { id: id },
  });
}
export default function ItemsPageItem({
  id,
  title,
  brand,
  price,
  images,
  size,
  quantity,
  description,
  article,
  sizes,
  setProd,
  base,
}) {
  const properties = useContext(Context);
  const router = useRouter();
  return (
    <Link
      href={`${base}/${properties.tovar}?id=${id}`}
      className={"col-sm-4 col-6 " + size}
      onClick={() => {
        setPageInfo(
          images,
          title,
          brand,
          price,
          quantity,
          setProd,
          id,
          description,
          article,
          sizes,
          router
        );
        properties.setBaseLink(`${base}/`);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        sessionStorage.setItem("title", title);
      }}
      onMouseOver={() => {
        properties.setTovar(title);
      }}
    >
      <div
        style={{ backgroundImage: `url(${images[0].link})` }}
        className="item-card"
        id={"item-" + id}
        data-id={id}
      >
        <p className="item-card-hover">Переглянути</p>
        {base === "sale" ? (
          <Image
            width={48}
            height={48}
            alt="sale"
            className="sale-icon"
            src={SaleIcon}
          ></Image>
        ) : (
          ""
        )}
        {base === "news" ? (
          <Image
            width={48}
            height={48}
            alt="sale"
            className="sale-icon"
            src={NewsIcon}
          ></Image>
        ) : (
          ""
        )}
      </div>
      <div className="item-card-wrapper">
        <div className="item-card-text">
          <h2 className="item-card-brand">{brand.toUpperCase()}</h2>
          <h2 className="item-card-h">{title}</h2>
          <div className="price-row">
            {base === "sale" ? (
              <p className="item-card-a sale-price">{price} ₴</p>
            ) : (
              <p className="item-card-a">{price} ₴</p>
            )}
            <p className="item-card-a">&nbsp;&nbsp;</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
