import { useState } from "react";
const SaleFiltr = () => {
  const [disabledButtons, setDisabledButtons] = useState({});
  const handleClick = (buttonId) => {
    setDisabledButtons((prevState) => ({
      ...prevState,
      [buttonId]: !prevState[buttonId], // Toggle the disabled state
    }));
  };
  return (
    <div className="side-block col-lg-2">
      <div className="side-pants material">
        <div className="side-wrap">
          <p className="side-top-h">Тип білизни/одягу</p>
          <span
            className="side-span-close"
            onClick={(e) => {
              document
                .querySelector(".side-block")
                .classList.remove("side-block-show");
            }}
          >
            x
          </span>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="bra"
            value="bra"
          ></input>
          <label htmlFor="bra">Бюстгалтери</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="pants"
            value="pants"
          ></input>
          <label htmlFor="pants">Труси</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="pijami"
            value="pijami"
          ></input>
          <label htmlFor="pijami">Піжами</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="robes"
            value="robes"
          ></input>
          <label htmlFor="robes">Халати</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="swimwear"
            value="swimwear"
          ></input>
          <label htmlFor="swimwear">Купальники</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="nightrobes"
            value="nightrobes"
          ></input>
          <label htmlFor="nightrobes">Нічні сорочки</label>
        </div>
      </div>

      <div className="side-pants size-bust">
        <p className="side-top-h">Розмір</p>
        <div className="row size-row">
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[1]}
            onClick={() => handleClick(1)}
          >
            S
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[2]}
            onClick={() => handleClick(2)}
          >
            M
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[3]}
            onClick={() => handleClick(3)}
          >
            L
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[4]}
            onClick={() => handleClick(4)}
          >
            XL
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[5]}
            onClick={() => handleClick(5)}
          >
            2XL
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[6]}
            onClick={() => handleClick(6)}
          >
            3XL
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[7]}
            onClick={() => handleClick(7)}
          >
            4XL
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[8]}
            onClick={() => handleClick(8)}
          >
            5XL
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[9]}
            onClick={() => handleClick(9)}
          >
            6XL
          </button>
        </div>
      </div>
    </div>
  );
};
export default SaleFiltr;
