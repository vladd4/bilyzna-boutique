import { useState } from "react";
const PijamiFiltr = () => {
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
            id="cornette"
            value="cornette"
          ></input>
          <label htmlFor="cornette">Cornette</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="Babella"
            value="Babella"
          ></input>
          <label htmlFor="Babella">Babella</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="De Lafense"
            value="De Lafense"
          ></input>
          <label htmlFor="De Lafense">De Lafense</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="DKaren"
            value="DKaren"
          ></input>
          <label htmlFor="DKaren">DKaren</label>
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
            id="TARO"
            value="TARO"
          ></input>
          <label htmlFor="TARO">TARO</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="Domja"
            value="Domja"
          ></input>
          <label htmlFor="Domja">Domja</label>
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
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[10]}
            onClick={() => handleClick(10)}
          >
            36
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[11]}
            onClick={() => handleClick(11)}
          >
            38
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[12]}
            onClick={() => handleClick(12)}
          >
            40
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[13]}
            onClick={() => handleClick(13)}
          >
            42
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[14]}
            onClick={() => handleClick(14)}
          >
            44
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[15]}
            onClick={() => handleClick(15)}
          >
            46
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[16]}
            onClick={() => handleClick(16)}
          >
            48
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[17]}
            onClick={() => handleClick(17)}
          >
            50
          </button>
          <button
            className="top-size-btn col-lg-3 col-1"
            disabled={disabledButtons[18]}
            onClick={() => handleClick(18)}
          >
            52
          </button>
        </div>
      </div>
    </div>
  );
};
export default PijamiFiltr;
