import React, { useContext } from "react";
import List from "./List";

import "../Styles/board.scss";
import AddList from "./AddList";

import { ListContext, EventsContext } from "../Contexts";

export default function Board() {
  const [lists, dispatch] = useContext(ListContext);

  const events = {
    changeListNameHandler: (e, listId) => {
      dispatch({
        type: "RENAME_LIST",
        payload: {
          name: e.target.value,
          listId,
        },
      });
    },
    deleteListHandler: (listId) => {
      dispatch({
        type: "DELETE_LIST",
        payload: {
          listId,
        },
      });
    },
    copyListHandler: (listId) => {
      dispatch({
        type: "COPY_LIST",
        payload: {
          listId,
        },
      });
    },
  };

  return (
    <div className="board">
      <EventsContext.Provider value={events}>
        {lists.map((list) => (
          <List
            key={list.listId}
            name={list.name}
            listItems={list.listItems}
            listId={list.listId}
          />
        ))}
        <AddList listsLength={lists.length} />
      </EventsContext.Provider>
    </div>
  );
}
