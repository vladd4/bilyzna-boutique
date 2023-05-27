import ItemsPageItem from "./ItemsPageItem";

const LikePage = ({ products }) => {
  return (
    <div className="like-page">
      <h2 className="like-h">Збережені</h2>
      <div className="like-main container">
        <div className="row">
          {products.map((item) => {
            return (
              <ItemsPageItem
                key={item.id}
                id={"item-card-" + item.id}
                title={item.title}
                price={item.price}
                img={item.image}
                size={"col-lg-3"}
              ></ItemsPageItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LikePage;
