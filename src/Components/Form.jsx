import React, { useContext } from "react";
import useFormState from "../Hooks/useFormState";

import { ListContext } from "../Contexts";

const Form = ({ id, toggleEdit }) => {
  const [value, handleChange, handleReset] = useFormState("");

  const [lists, dispatch] = useContext(ListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch({
        type: "ADD_LIST_ITEM",
        payload: { listId: id, title: value },
      });
    }
    handleReset();
    if (toggleEdit) {
      toggleEdit();
    }
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
