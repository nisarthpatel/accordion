import { useState } from "react";
import { data } from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [toggleMultiSelect, setToggleMultiSelect] = useState(false);
  const [showMultiSelection, setShowMultipleSelection] = useState([]);

  const handleSelected = (getChangedValue) => {
    setSelected(getChangedValue === selected ? null : getChangedValue);
  };

  const handleMultiSelected = (getChangedValue) => {
    let cpyMultiple = [...showMultiSelection];
    const findIndexOfCurrent = cpyMultiple.indexOf(getChangedValue);

    if (findIndexOfCurrent === -1) cpyMultiple.push(getChangedValue);
    else cpyMultiple.splice(findIndexOfCurrent, 1);

    setShowMultipleSelection(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button
        className={`toggle-btn ${toggleMultiSelect ? "active" : ""}`}
        onClick={() => setToggleMultiSelect(!toggleMultiSelect)}
      >
        {toggleMultiSelect ? "Disable" : "Enable"} Multiple Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              onClick={
                toggleMultiSelect
                  ? () => handleMultiSelected(item.id)
                  : () => handleSelected(item.id)
              }
              key={item.id}
              className={`item ${
                toggleMultiSelect
                  ? showMultiSelection.includes(item.id)
                    ? "active"
                    : ""
                  : selected === item.id
                  ? "active"
                  : ""
              }`}
            >
              <h2 className="question">
                {item.question}
                <span className="icon">+</span>
              </h2>
              {toggleMultiSelect
                ? showMultiSelection.includes(item.id) && (
                    <div className="answer">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="answer">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div className="no-data">NO DATA FOUND!!!</div>
        )}
      </div>
    </div>
  );
}
