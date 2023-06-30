import { useState } from "react";

function validateMail(mail, setMail) {
  if (!mail.toString().includes("@")) {
    setMail("");
    document.querySelector(".news-input").placeholder =
      "Введіть коректну пошту";
    document.querySelector(".news-input").classList.add("news-input-error");
  } else {
    const data = `Пошта: ${mail}`;
    sendFormToTelegram(data);
    setMail("");
    document.querySelector(".news-input").placeholder =
      "Залиште електронну адресу";
    document.querySelector(".news-input").classList.remove("news-input-error");
  }
}
async function sendFormToTelegram(message) {
  const botToken = "6029116446:AAESbXLFS9uZn9IS4ibXDqELPjMwiHWZQ7g";
  const chatId = "-975922405";

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (response.ok) {
      console.log("Form was send!");
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
const Newsletter = () => {
  const [mail, setMail] = useState("");
  return (
    <div
      className="newsletter-div"
      onClick={(e) => {
        document.querySelector(".drop-menu-nav").classList.remove("drop-show");
      }}
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
            onClick={(e) => {
              validateMail(mail, setMail);
            }}
          >
            Підписатись
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
