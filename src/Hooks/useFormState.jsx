import { useState } from "react";

const useFormState = (init) => {
  const [value, setValue] = useState(init);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue(init);
  };

  return [value, handleChange, handleReset];
};

export default useFormState;
