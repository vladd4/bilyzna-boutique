import Arrow from "../imgs/arrow.png";

window.onscroll = function () {
  scrollFunction();
  scrollFunctionAnim();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.querySelector(".toTop-btn").classList.add("show-top");
  } else {
    document.querySelector(".toTop-btn").classList.remove("show-top");
  }
}
function scrollFunctionAnim() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.querySelector(".toTop-btn").classList.add("show-top-anim");
  } else {
    document.querySelector(".toTop-btn").classList.remove("show-top-anim");
  }
}
function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}

const ToTop = () => {
  return (
    <img
      className="toTop-btn"
      alt=""
      onClick={(e) => {
        toTop();
      }}
      src={Arrow}
    ></img>
  );
};

export default ToTop;
