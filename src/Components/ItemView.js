function hideImage() {
  document.querySelector(".item-view-popup").style.display = "none";
  document.querySelector(".App").style.height = "";
  document.querySelector(".App").style.overflowX = "";
}

const ItemView = ({ img }) => {
  return (
    <div className="item-view-popup" onClick={(e) => hideImage()}>
      <div className="item-view-slide conatiner-fluid">
        <img className="view-img" alt="" src={img}></img>
      </div>
      <span className="close-span" onClick={(e) => hideImage()}>
        x
      </span>
    </div>
  );
};
export default ItemView;
