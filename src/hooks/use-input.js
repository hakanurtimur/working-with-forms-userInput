import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isTouched;

  const enterValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const userBlurHandler = (event) => {
    setIsTouched(true);
  };

  function reset() {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    hasError,
    enterValueHandler,
    userBlurHandler,
    valueIsValid: valueIsValid,
    reset
  };
};
export default useInput;
