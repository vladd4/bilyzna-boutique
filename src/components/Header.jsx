"use client";
import Cart from "@/../public/cart.png";
import Insta from "@/../public/instagram.png";
import Viber from "@/../public/viber.png";
import Logo from "@/../public/logo.png";

import DropMenu from "./DropMenu";

import { showCart, showMenu } from "../utils/hide_cart_header";

import { useContext } from "react";
import Context from "../hooks/Context";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { cart } = useContext(Context);
  return (
    <header className="head-wrap" id="header">
      <nav className="navbar">
        <div className="navbar-wrapper">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <DropMenu />
          <p className="ua-en">
            <a
              href="https://www.instagram.com/bilyzna.boutique/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="header-social header-social-left"
                alt="Instagram Social"
                src={Insta}
                width={512}
                height={512}
              ></Image>
            </a>
            <a
              href="https://invite.viber.com/?g2=AQBSH285P8X1PEt6jGuay7S8YwNTPkSPnaPb9e%2FFkCd%2F6ZUJO48oc3fSqIdUq6zq"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Viber Social"
                width={512}
                height={512}
                className="header-social"
                src={Viber}
              ></Image>
            </a>
          </p>
          <Link className="navbar-brand" href="/">
            <Image
              className="logo"
              alt="Bilyzna Boutique"
              priority
              width={323}
              height={90}
              src={Logo}
            />
          </Link>
          <div className="icons-block">
            <Image
              width={512}
              height={512}
              className="header-icons cart-icon"
              alt="Show cart"
              src={Cart}
              onClick={showCart}
            />
            {cart.length >= 1 ? (
              <span className="cart-span">{cart.length}</span>
            ) : null}
          </div>
        </div>
      </nav>
      <div className="links-row">
        <div className="drop-wrap">
          <Link className="nav-link" href="/news">
            Новинки
          </Link>
        </div>
        <div className="drop-wrap">
          <p className="nav-link">Жіноча Білизна</p>
          <ul className="drop-list">
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/bra">
                Бюстгалтери
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/womunderwear">
                Трусики
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/pijamas">
                Піжами
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/robe">
                Халати
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/nightgowns">
                Нічні сорочки
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/corrunderwear">
                Утягуюча (корегуюча) білизна
              </Link>
            </li>
          </ul>
        </div>
        <div className="drop-wrap">
          <p className="nav-link">Для чоловіків</p>
          <ul className="drop-list">
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/manunderwear">
                Труси
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/manpijamas">
                Піжами
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/manrobe">
                Халати
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/manshirt">
                Майки
              </Link>
            </li>
          </ul>
        </div>
        <div className="drop-wrap">
          <p className="nav-link">Купальники</p>
          <ul className="drop-list">
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/womswimsuit">
                Жіночі
              </Link>
            </li>
            <li className="drop-list-item">
              <Link className="drop-list-item" href="/manswimsuit">
                Чоловічі
              </Link>
            </li>
          </ul>
        </div>
        <Link className="nav-link" href="/sale">
          Знижки
        </Link>
      </div>
    </header>
  );
}
