import { useState } from "react";

const BrasFiltr = () => {
  const [sizes] = useState([
    "75B",
    "75C",
    "75D",
    "75E",
    "75F",
    "75G",
    "75H",
    "75I",
    "75J",
    "75K",
    "75L",
    "80B",
    "80C",
    "80D",
    "80E",
    "80F",
    "80G",
    "80H",
    "80I",
    "80J",
    "80K",
    "80L",
    "85B",
    "85C",
    "85D",
    "85E",
    "85F",
    "85G",
    "85H",
    "85I",
    "85J",
    "85K",
    "85L",
    "90B",
    "90C",
    "90D",
    "90E",
    "90F",
    "90G",
    "90H",
    "90I",
    "90J",
    "90K",
    "90L",
    "95B",
    "95C",
    "95D",
    "95E",
    "95F",
    "95G",
    "95H",
    "95I",
    "95J",
    "95K",
    "95L",
  ]);
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
            id="ava"
            value="ava"
          ></input>
          <label for="ava">AVA</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="GORSENIA"
            value="GORSENIA"
          ></input>
          <label for="GORSENIA">GORSENIA</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="GAIA"
            value="GAIA"
          ></input>
          <label for="GAIA">GAIA</label>
        </div>
      </div>

      <div className="side-pants chashka">
        <p className="side-top-h">Тип чашки</p>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="braz"
            value="Новинки"
          ></input>
          <label for="braz">Ущільнені</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="slip"
            value="Вироблено в Україні"
          ></input>
          <label for="slip">М'які</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="str"
            value="Ціна тижня"
          ></input>
          <label for="str">Push-ups</label>
        </div>
        <div>
          <input
            className="radios"
            type="checkbox"
            id="short"
            value="Ціна тижня"
          ></input>
          <label for="short">Напівщільні</label>
        </div>
      </div>
      <div className="side-pants size-bust">
        <p className="side-top-h">Розмір бюстгальтера</p>
        <div className="row size-row">
          {sizes.map((size) => {
            return (
              <button
                key={sizes.indexOf(size)}
                disabled={disabledButtons[sizes.indexOf(size)]}
                onClick={() => handleClick(sizes.indexOf(size))}
                className="top-size-btn col-lg-3 col-1"
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BrasFiltr;
