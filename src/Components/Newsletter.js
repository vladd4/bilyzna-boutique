import { useState } from "react";

function sendMail(mail) {
  console.log(mail, "was send succesfully");
}
function validateMail(mail, setMail) {
  if (!mail.toString().includes("@")) {
    setMail("");
    document.querySelector(".news-input").placeholder =
      "Введіть коректну пошту";
    document.querySelector(".news-input").classList.add("news-input-error");
  } else {
    sendMail(mail);
    setMail("");
    document.querySelector(".news-input").placeholder =
      "Залиште електронну адресу";
    document.querySelector(".news-input").classList.remove("news-input-error");
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
          Підпишіться на отримання новин та отримайте 100 грн знижки на першу
          покупку! Вся інформація захищена від шахраїв та керується
          адміністратором. Детальну інформацію можна знайти{" "}
          <a className="news-link">тут</a>.
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
