import { useNavigate } from "react-router-dom";
const Modal = ({ setCart }) => {
  const navigate = useNavigate();
  return (
    <dialog id="cart-success">
      <div className="dialog-wrapper">
        <h1 className="dialog-h">Ваше замовлення було успішно надіслано!</h1>
        <button
          className="dialog-close-btn"
          onClick={(e) => {
            document.querySelector("#cart-success").close();
            navigate(-2);
            setCart([]);
          }}
        >
          Закрити
        </button>
      </div>
    </dialog>
  );
};
export default Modal;
