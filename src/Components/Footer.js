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
            <h1 className="footer-block-h">Графік приймань замовлень</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p">Пн-Чт: 9:00 - 22:00</p>
              <p className="footer-block-p">Пт-Сб: 10:00 - 20:00</p>
              <p className="footer-block-p">Нд: 10:00 - 18:00</p>
            </div>
          </div>
          <div className="col-lg-4">
            <h1 className="footer-block-h">Контакти</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p">
                <a href="tel:+380950453539">+380 95 045 35 39</a>
              </p>
              <p className="footer-block-p">
                <a href="mailto:donetsvlad44@gmail.com">
                  donetsvlad44@gmail.com
                </a>
              </p>
              <p className="footer-block-p">www.bilyznaboutique.com</p>
              <div className="follow">
                <div className="follow-icons">
                  <a
                    href="https://www.instagram.com/bilyzna.boutique/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="fa fa-instagram" alt="" src={Insta}></img>
                  </a>
                  <a
                    href="https://www.facebook.com/bilyzna.boutique/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="fa fa-twitter" alt="" src={Face}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="bilyzna-tm">&trade;Bilyzna Boutique 2023.</p>
      </div>
    </div>
  );
};

export default Footer;
