"use client";

import { hideImage } from "../utils/hide_cart_header";

export default function ItemView({ img }) {
  return (
    <div className="item-view-popup" onClick={hideImage}>
      <div className="item-view-slide conatiner-fluid">
        <img className="view-img" alt="" src={img}></img>
      </div>
      <span className="close-span" onClick={hideImage}>
        x
      </span>
    </div>
  );
}
