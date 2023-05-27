const Card = ({ id, title }) => {
  return (
    <div className="card col-lg-4 col-sm-6 col-6" id={id}>
      <div className="card-wrapper">
        <div className="card-text">
          <h2 className="card-h">{title}</h2>
          <p className="card-a">Дивитись більше</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
