import React from "react";

import "../Styles/addItem.scss";

export default function AddListItem() {
  return (
    <div className="add-item">
      <input
        style={{ display: "none" }}
        className="add-item__checkbox"
        type="checkbox"
        id="add-item"
      />
      <div className="add-item__text">
        <label htmlFor="add-item">
          {" "}
          <span>+</span> Add an item
        </label>
      </div>
    </div>
  );
}
