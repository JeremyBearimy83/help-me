import React, { useContext, useState, useRef } from "react";
import "../Styles/list.scss";

import ListActions from "./ListActions";
import ListItem from "./ListItem";
import Form from "./Form";

import useClickOut from "../Hooks/useClickOut.jsx";

import { EventsContext } from "../Contexts";

export default function List({ name, listItems, listId }) {
  const [showDropDown, setShowDropDown] = useState(false);

  const events = useContext(EventsContext);

  const dropdown = useRef();

  useClickOut(dropdown, () => {}, setShowDropDown);

  return (
    <div className="list">
      <div className="list__top">
        <input
          className="list__name"
          value={name}
          onChange={(e) => events.changeListNameHandler(e, listId)}
          type="text"
        />
        <div className="list__dropdown">
          <span
            onClick={() => setShowDropDown(true)}
            className="list__dropdown-icon"
          >
            <i class="fas fa-ellipsis-h"></i>
          </span>
          <ListActions
            ref={dropdown}
            open={showDropDown}
            closeHandler={() => setShowDropDown(false)}
            listId={listId}
          />
        </div>
      </div>
      {listItems.map((item) => (
        <ListItem
          key={item.itemId}
          title={item.title}
          itemId={item.itemId}
          listId={listId}
          completed={item.completed}
        />
      ))}
      <Form id={listId} />
      {/* <AddListItem /> */}
    </div>
  );
}
