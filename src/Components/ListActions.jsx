import React, { useContext } from "react";
import "../Styles/listActions.scss";

import { EventsContext } from "../Contexts";

export default React.forwardRef(function ListActions(
  { open, closeHandler, listId },
  ref
) {
  const clickHandler = (func) => {
    func();
    closeHandler();
  };

  const events = useContext(EventsContext);

  return (
    <div ref={ref} hidden={!open} className="list-actions">
      <div className="list-actions__top">
        <h3 className="list-actions__heading">List Actions</h3>
        <div onClick={closeHandler} className="list-actions__close">
          x
        </div>
      </div>

      <div className="list-actions__action">Add Item...</div>
      <div
        onClick={() => clickHandler(() => events.copyListHandler(listId))}
        className="list-actions__action"
      >
        Copy List...
      </div>
      <div
        onClick={() => clickHandler(() => events.deleteListHandler(listId))}
        className="list-actions__action"
      >
        Delete List...
      </div>
    </div>
  );
});
