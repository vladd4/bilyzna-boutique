import Style1 from "@/../public/style2_3.webp";
import Style2 from "@/../public/style2_1.webp";

import Image from "next/image";

export default function StyleBanner() {
  return (
    <div className="style-banner container">
      <div className="style-text-block">
        <h2 className="style-h">#bilyznastyle</h2>
        <p className="style-p">
          Перегляньте наш профіль в інстаграмі та діліться своїми стилізаціями
        </p>
      </div>
      <div className="style-img-block">
        <Image
          alt="Bilyzna Style"
          className="style-img"
          src={Style1}
          width={446}
          height={670}
        />
        <Image
          alt="Bilyzna Boutique Style"
          className="style-img"
          src={Style2}
          width={446}
          height={670}
        />
      </div>
    </div>
  );
}
