"use client";

import Insta from "@/../public/instagram.png";
import Viber from "@/../public/viber.png";
import Telegram from "@/../public/telegram-icon.png";

import "bootstrap/dist/css/bootstrap.css";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div
      id="footer"
      onClick={() => {
        document.querySelector(".drop-menu-nav").classList.remove("drop-show");
      }}
    >
      <div className="container">
        <div className="row" id="foot-ps">
          <div className="col-lg-4 col-sm-4 col-10">
            <h1 className="footer-block-h">Загальні питання</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p foot-links">
                <a href="#why-us">Про нас</a>
              </p>
              <p className="footer-block-p foot-links ">
                <Link href="/delivery" onClick={scrollTop}>
                  Доставка та оплата
                </Link>
              </p>
              <p className="footer-block-p foot-links">
                <Link href="/return" onClick={scrollTop}>
                  Умови повернення та обміну
                </Link>
              </p>
              <p className="footer-block-p foot-links">
                <a href="#banner">Каталог</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-10">
            <h1 className="footer-block-h">Графік обробки замовлень</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p">Пн-Чт: 9:00 - 22:00</p>
              <p className="footer-block-p">Пт-Сб: 10:00 - 20:00</p>
              <p className="footer-block-p">Нд: 10:00 - 18:00</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-10">
            <h1 className="footer-block-h">Наші контакти</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p foot-links">
                <a href="tel:+380950453539">+380 95 045 35 39</a>
              </p>
              <p className="footer-block-p foot-links">
                <a href="mailto:bilyznapolska@gmail.com">
                  bilyznapolska@gmail.com
                </a>
              </p>
              <p className="footer-block-p foot-links">
                <a href="https://www.bilyznaboutique.com.ua/">
                  www.bilyznaboutique.com
                </a>
              </p>
              <div className="follow">
                <div className="follow-icons">
                  <a
                    href="https://www.instagram.com/bilyzna.boutique/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="fa fa-instagram"
                      alt="Instagram"
                      width={130}
                      height={200}
                      src={Insta}
                    ></Image>
                  </a>
                  <a
                    href="https://t.me/+380950453539"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="fa fa-twitter"
                      alt="Telegram"
                      src={Telegram}
                      width={130}
                      height={200}
                    ></Image>
                  </a>
                  <a
                    href="https://invite.viber.com/?g2=AQBSH285P8X1PEt6jGuay7S8YwNTPkSPnaPb9e%2FFkCd%2F6ZUJO48oc3fSqIdUq6zq"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="fa fa-twitter"
                      alt="Viber"
                      src={Viber}
                      width={130}
                      height={200}
                    ></Image>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="bilyzna-tm">Copyright &copy; Білизна Boutique 2024</p>
      </div>
    </div>
  );
}
