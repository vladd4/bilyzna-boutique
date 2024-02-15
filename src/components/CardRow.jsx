import Card from "./Card";

export default function CardRow() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Card id="card-1" title="Бюстгальтери" path="/bra" />
        <Card id="card-2" title="Трусики" path="/womunderwear" />
        <Card id="card-3" title="Піжами" path="/pijamas" />
        <Card id="card-4" title="Халати" path="/robe" />
        <Card id="card-5" title="Для чоловіків" path="/manunderwear" />
        <Card id="card-6" title="Купальники" path="/womswimsuit" />
      </div>
    </div>
  );
}
