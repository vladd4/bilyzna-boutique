import Card from "./Card";

const CardRow = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Card id={"card-1"} title={"Бюстгальтери"} path={"/bras"}></Card>
        <Card id={"card-2"} title={"Трусики"} path={"/pants"}></Card>
        <Card id={"card-3"} title={"Піжами"} path={"/pijami"}></Card>
        <Card id={"card-4"} title={"Халати"} path={"/robes"}></Card>
        <Card id={"card-5"} title={"Для чоловіків"} path={"/manpants"}></Card>
        <Card id={"card-6"} title={"Купальники"} path={"/swimwear"}></Card>
      </div>
    </div>
  );
};

export default CardRow;
