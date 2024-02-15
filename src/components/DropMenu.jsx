"use client";

import Logo from "@/../public/logo.png";
import Insta from "@/../public/instagram.png";
import Teleg from "@/../public/telegram-icon.png";
import Viber from "@/../public/viber.png";

import Link from "next/link";
import Image from "next/image";

import { showDrop, hideDrop } from "../utils/show_hide_dropMenu";
import { useState } from "react";

export default function DropMenu() {
  const [isClicked, setIsClicked] = useState(false);
  const linkHandler = () => {
    document.querySelector(".drop-menu-nav").classList.remove("drop-show");
  };
  return (
    <div className="drop-menu-nav">
      <div className="drop-logo-row">
        <Image
          className="drop-logo-img"
          alt="Bilyzna Boutique"
          src={Logo}
          width={323}
          height={90}
        />
      </div>
      <ul>
        <li className="drop-li">
          <div className="drop-li-wrap">
            <button className="drop-li-btn">
              <Link className="drop-li-btn" href="/news" onClick={linkHandler}>
                Новинки
              </Link>
            </button>
          </div>
        </li>
        <li className="drop-li">
          <div
            className="drop-li-wrap"
            onClick={(e) =>
              isClicked ? hideDrop(e, setIsClicked) : showDrop(e, setIsClicked)
            }
          >
            <button className="drop-li-btn">Жіноча білизна</button>
            <span className="drop-close-span">&#8250;</span>
          </div>
          <div className="drop-menu-drop" id="drop1">
            <p>
              <Link href="/bra" onClick={linkHandler}>
                Бюстгалтери
              </Link>
            </p>
            <p>
              <Link href="/womunderwear" onClick={linkHandler}>
                Трусики
              </Link>
            </p>
            <p>
              <Link href="/pijamas" onClick={linkHandler}>
                Піжами
              </Link>
            </p>
            <p>
              <Link href="/robe" onClick={linkHandler}>
                Халати
              </Link>
            </p>
            <p>
              <Link href="/nightgowns" onClick={linkHandler}>
                Нічні сорочки
              </Link>
            </p>
            <p>
              <Link href="/corrunderwear" onClick={linkHandler}>
                Утягуюча (корегуюча) білизна
              </Link>
            </p>
          </div>
        </li>
        <li className="drop-li">
          <div
            className="drop-li-wrap"
            onClick={(e) =>
              isClicked ? hideDrop(e, setIsClicked) : showDrop(e, setIsClicked)
            }
          >
            <button className="drop-li-btn">Для чоловіків</button>
            <span className="drop-close-span">&#8250;</span>
          </div>
          <div className="drop-menu-drop" id="drop2">
            <p>
              <Link href="/manunderwear" onClick={linkHandler}>
                Труси
              </Link>
            </p>
            <p>
              <Link href="/manpijamas" onClick={linkHandler}>
                Піжами
              </Link>
            </p>
            <p>
              <Link href="/manrobe" onClick={linkHandler}>
                Халати
              </Link>
            </p>
            <p>
              <Link href="/manshirt" onClick={linkHandler}>
                Майки
              </Link>
            </p>
          </div>
        </li>
        <li className="drop-li">
          <div
            className="drop-li-wrap"
            onClick={(e) =>
              isClicked ? hideDrop(e, setIsClicked) : showDrop(e, setIsClicked)
            }
          >
            <button className="drop-li-btn">Купальники</button>
            <span className="drop-close-span">&#8250;</span>
          </div>
          <div className="drop-menu-drop" id="drop2">
            <p>
              <Link href="/womswimsuit" onClick={linkHandler}>
                Жіночі
              </Link>
            </p>
            <p>
              <Link href="/manswimsuit" onClick={linkHandler}>
                Чоловічі
              </Link>
            </p>
          </div>
        </li>
        <li className="drop-li">
          <div className="drop-li-wrap">
            <button className="drop-li-btn">
              <Link className="drop-li-btn" href="/sale" onClick={linkHandler}>
                Знижки
              </Link>
            </button>
          </div>
        </li>
      </ul>
      <div className="drop-icons-block">
        <a
          href="https://www.instagram.com/bilyzna.boutique/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="drop-icon-img"
            alt="Instagram"
            width={130}
            height={200}
            src={Insta}
          />
        </a>
        <a href="https://t.me/+380950453539" target="_blank" rel="noreferrer">
          <Image
            className="drop-icon-img"
            alt="Telegram"
            width={130}
            height={200}
            src={Teleg}
          />
        </a>
        <a
          href="https://invite.viber.com/?g2=AQBSH285P8X1PEt6jGuay7S8YwNTPkSPnaPb9e%2FFkCd%2F6ZUJO48oc3fSqIdUq6zq"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="drop-icon-img"
            alt="Viber"
            width={130}
            height={200}
            src={Viber}
          />
        </a>
      </div>
    </div>
  );
}
