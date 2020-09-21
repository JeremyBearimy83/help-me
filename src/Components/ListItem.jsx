import React, { useContext } from "react";
import "../Styles/item.scss";

import { ListContext } from "../Contexts";

export default function ListItem({ title, itemId, listId, completed }) {
  const [lists, dispatch] = useContext(ListContext);

  return (
    <div
      className="item"
      style={{ backgroundColor: completed ? "#A2CE43" : "#F14B69" }}
    >
      <button
        className="button"
        style={{
          borderRadius: "5px",
          padding: "2px",
          margin: "2px",
          backgroundColor: "red",
          color: "white",
        }}
        onClick={() => {
          dispatch({
            type: "DELETE_LIST_ITEM",
            payload: { listId: listId, itemId: itemId },
          });
        }}
      >
        Delete
      </button>
      <button
        className="button"
        style={{
          borderRadius: "5px",
          padding: "2px",
          margin: "2px",
          backgroundColor: "#42C0B5",
        }}
        onClick={() =>
          dispatch({
            type: "TOGGLE_COMPLETE",
            payload: { listId: listId, itemId: itemId },
          })
        }
      >
        Toggle
      </button>
      <div className="item__text"> {title}</div>
    </div>
  );
}
