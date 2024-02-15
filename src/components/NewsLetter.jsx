"use client";

import { useState } from "react";
import { postTelegram } from "../utils/postTelegram";
import { useDispatch } from "react-redux";
import { setAlertText, setShowAlert } from "@/redux/slices/alertSlice";

const validateMail = (mail, setMail, dispatch) => {
  setMail(mail);
  if (!mail.toString().includes("@")) {
    setMail("");
    document.querySelector(".news-input").placeholder =
      "Введіть коректну пошту";
    document.querySelector(".news-input").classList.add("news-input-error");
  } else {
    const data = `Пошта: ${mail}`;
    postTelegram(data);
    setMail("");
    document.querySelector(".news-input").placeholder =
      "Залиште електронну адресу";
    document.querySelector(".news-input").classList.remove("news-input-error");
  }
  dispatch(setAlertText("Ви успішно підписались на розсилку!"));
  dispatch(setShowAlert(true));
};

export default function NewsLetter() {
  const [mail, setMail] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      className="newsletter-div"
      // onClick={() => {
      //   document.querySelector(".drop-menu-nav").classList.remove("drop-show");
      // }}
    >
      <div className="news-wrapper">
        <h3 className="news-h">Будь в курсі всіх новинок!</h3>
        <p className="news-p">
          Будьте в курсі останніх новин, акцій та спеціальних пропозицій!
          Підпишіться на нашу розсилку, щоб отримувати щомісячні оновлення
          напряму в вашу поштову скриньку. Не пропустіть жодного важливого
          повідомлення!
        </p>
        <div className="input-div">
          <input
            className="news-input"
            type="email"
            placeholder="Залиште електронну адресу"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          ></input>
          <button
            className="news-btn"
            onClick={() => {
              validateMail(mail, setMail, dispatch);
            }}
          >
            Підписатись
          </button>
        </div>
      </div>
    </div>
  );
}
