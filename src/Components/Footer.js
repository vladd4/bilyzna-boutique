import Insta from "../imgs/instagram.png";
import Face from "../imgs/facebook.png";

const Footer = () => {
  return (
    <div
      id="footer"
      onClick={(e) => {
        document.querySelector(".drop-menu-nav").classList.remove("drop-show");
      }}
    >
      <div className="container">
        <div className="row" id="foot-ps">
          <div className="col-lg-4">
            <h1 className="footer-block-h">Загальні питання</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p">Оплата та доставка</p>
              <p className="footer-block-p">Подарункові сертифікати</p>
              <p className="footer-block-p">Умови повернення</p>
              <p className="footer-block-p">Співпраця</p>
            </div>
          </div>
          <div className="col-lg-4">
            <h1 className="footer-block-h">Графік роботи</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p">Пн-Чт: 9:00 - 22:00</p>
              <p className="footer-block-p">Пт-Сб: 10:00 - 20:00</p>
              <p className="footer-block-p">Нд: 10:00 - 18:00</p>
            </div>
          </div>
          <div className="col-lg-4">
            <h1 className="footer-block-h">Контакти</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p">+380 95 306 75 44</p>
              <p className="footer-block-p">donetsvlad44@gmail.com</p>
              <p className="footer-block-p">www.bilyznaboutique.com</p>
              <div className="follow">
                <div className="follow-icons">
                  <img className="fa fa-instagram" alt="" src={Insta}></img>
                  <img className="fa fa-twitter" alt="" src={Face}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
