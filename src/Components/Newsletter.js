import { useState } from "react";

const Newsletter = () => {
  const [mail, setMail] = useState("");
  function sendMail(mail) {
    console.log(mail, "was send succesfully");
  }
  return (
    <div className="newsletter-div">
      <div className="news-wrapper">
        <h3 className="news-h">Будь в курсі всіх новинок!</h3>
        <p className="news-p">
          Підпишіться на отримання новин та отримайте 100 грн знижки на першу
          покупку!
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
              sendMail(mail);
              setMail("");
            }}
          >
            Підписатись
          </button>
        </div>
        <p className="news-admin">
          Вся інформація захищена від шахраїв та керується адміном. Детальну
          інформацію можна знайти <a className="news-link">тут</a>.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
