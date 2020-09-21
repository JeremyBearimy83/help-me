import React, { useContext, useRef } from "react";

import "../Styles/addList.scss";

import { ListContext } from "../Contexts";

import useClickOut from "../Hooks/useClickOut";

export default function AddList({ listsLength }) {
  const [lists, dispatch] = useContext(ListContext);

  const nameInput = useRef("");
  const addList = useRef();
  const addListCheckbox = useRef();

  useClickOut(
    addList,
    () => {},
    () => {
      nameInput.current.value = "";
      addListCheckbox.current.checked = false;
    }
  );

  const message = listsLength ? "Add another list" : "Add a list";

  return (
    <div ref={addList} className="add-list">
      <input
        style={{ display: "none" }}
        className="add-list__checkbox"
        type="checkbox"
        id="add-list"
        ref={addListCheckbox}
      />

      <div class="add-list__label">
        <label htmlFor="add-list">
          <div class="add-list__text">
            <span>+</span> {message}
          </div>
        </label>
        <input ref={nameInput} className="add-list__input" type="text" />
        <div className="add-list__bottom">
          <button
            onClick={() => {
              if (nameInput.current.value) {
                dispatch({
                  type: "ADD_LIST",
                  payload: {
                    name: nameInput.current.value,
                  },
                });
                nameInput.current.value = "";
                addListCheckbox.current.checked = false;
              }
            }}
            className="add-list__button"
          >
            Add List
          </button>
          <label htmlFor="add-list" className="add-list__cancel-button">
            X
          </label>
        </div>
      </div>
    </div>
  );
}
