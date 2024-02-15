"use client";

import { hideCart } from "@/utils/hide_cart_header";
import Link from "next/link";

const scrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

export default function Card({ id, title, path }) {
  return (
    <div className="card col-lg-4 col-sm-6 col-6" id={id} onClick={hideCart}>
      <Link href={path}>
        <div className="card-wrapper" onClick={scrollTop}>
          <div className="card-text">
            <h2 className="card-h">{title}</h2>
            <p className="card-a">Дивитись більше</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
