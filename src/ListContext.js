import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

import reducer from "./ListReducer.js";

import { ListContext } from "./Contexts";

export function ListContextProvider(props) {
  const initialState = [
    {
      listId: uuid(),
      name: "List one",
      listItems: [
        {
          title: "Check",
          timeLeft: Date.now(),
          completed: false,
          itemId: uuid(),
        },
        {
          title: "Works",
          timeLeft: Date.now(),
          completed: false,
          itemId: uuid(),
        },
      ],
    },
    {
      name: "List two",
      listId: uuid(),
      listItems: [
        {
          title: "good",
          timeLeft: Date.now(),
          completed: false,
          itemId: uuid(),
        },
        {
          title: "good",
          timeLeft: Date.now(),
          completed: false,
          itemId: uuid(),
        },
      ],
    },
    {
      name: "List two",
      listId: uuid(),
      listItems: [
        {
          title: "this",
          timeLeft: Date.now(),
          completed: false,
          itemId: uuid(),
        },
        {
          title: "also",
          timeLeft: Date.now(),
          completed: false,
          itemId: uuid(),
        },
        {
          title: "works",
          timeLeft: Date.now(),
          completed: false,
          itemId: uuid(),
        },
      ],
    },
  ];

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ListContext.Provider value={[state, dispatch]}>
      {props.children}
    </ListContext.Provider>
  );
}
