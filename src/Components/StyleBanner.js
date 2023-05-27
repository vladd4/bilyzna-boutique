import Style1 from "../imgs/style2_3.jpg";
import Style2 from "../imgs/style2_1.jpg";

const StyleBanner = () => {
  return (
    <div className="style-banner container">
      <div className="style-text-block">
        <h2 className="style-h">#bilyznastyle</h2>
        <p className="style-p">
          Переглянь наш профіль на інстаграмі та ділись своїми стилізаціями
        </p>
      </div>
      <div className="style-img-block row">
        <img alt="" className="style-img col-lg-5 col-6" src={Style1}></img>
        <img alt="" className="style-img col-lg-5 col-6" src={Style2}></img>
      </div>
    </div>
  );
};

export default StyleBanner;
