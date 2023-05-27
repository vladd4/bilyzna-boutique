import Insta from "../imgs/instagram.png";
import Face from "../imgs/facebook.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row" id="foot-ps">
          <div className="col-lg-4">
            <h1 className="footer-block-h">Про нас</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p">History</p>
              <p className="footer-block-p">Out Team</p>
              <p className="footer-block-p">Mission Statement</p>
              <p className="footer-block-p">Terms & Conditions</p>
              <p className="footer-block-p">Privacy Policy</p>
            </div>
          </div>
          <div className="col-lg-4">
            <h1 className="footer-block-h">Умови та тарифи</h1>
            <div className="foot-wrapper">
              <p className="footer-block-p">News and Stories</p>
              <p className="footer-block-p">Publications</p>
              <p className="footer-block-p">Take Action</p>
              <p className="footer-block-p">Recomendations</p>
              <p className="footer-block-p">Help</p>
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
