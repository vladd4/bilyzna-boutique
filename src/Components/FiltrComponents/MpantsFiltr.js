import { useState } from "react";
const MpantsFiltr = () => {
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
          <p className="side-top-h">Виробник</p>
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
            id="KEY"
            value="KEY"
          ></input>
          <label htmlFor="KEY">KEY</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="Cornette"
            value="Cornette"
          ></input>
          <label htmlFor="Cornette">Cornette</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="HENDERSON"
            value="HENDERSON"
          ></input>
          <label htmlFor="HENDERSON">HENDERSON</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="LAMA"
            value="LAMA"
          ></input>
          <label htmlFor="LAMA">LAMA</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="REDO"
            value="REDO"
          ></input>
          <label htmlFor="REDO">REDO</label>
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
        </div>
      </div>
    </div>
  );
};
export default MpantsFiltr;
