import Card from "./Card";

const CardRow = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Card id={"card-1"} title={"Верхній одяг"}></Card>
        <Card id={"card-2"} title={"Аксесуари"}></Card>
        <Card id={"card-3"} title={"Сукні"}></Card>
        <Card id={"card-4"} title={"Купальники"}></Card>
        <Card id={"card-5"} title={"Нижній одяг"}></Card>
        <Card id={"card-6"} title={"Сумки"}></Card>
      </div>
    </div>
  );
};

export default CardRow;
