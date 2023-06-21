import { Link } from "react-router-dom";

const Card = ({ id, title, path }) => {
  return (
    <div className="card col-lg-4 col-sm-6 col-6" id={id}>
      <Link to={path}>
        <div
          className="card-wrapper"
          onClick={() => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
          }}
        >
          <div className="card-text">
            <h2 className="card-h">{title}</h2>
            <p className="card-a">Дивитись більше</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
