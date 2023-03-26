import { useReducer } from "react";

const inputReducer = (state, action) => {
  if (action.type === "ENTER") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return initialInputState;
};

const initialInputState = { value: "", isTouched: false };

const useInput = (validateValue) => {
  const [inputState, dispatchInputState] = useReducer(
    inputReducer,
    initialInputState
  );

  const { value } = inputState;
  const { isTouched } = inputState;

  const valueIsValid = validateValue(value);

  const hasError = !valueIsValid && isTouched;

  const enterValueHandler = (event) => {
    dispatchInputState({
      type: "ENTER",
      value: event.target.value,
    });
  };

  const userBlurHandler = (event) => {
    dispatchInputState({
      type: "BLUR",
    });
  };

  function reset() {
    dispatchInputState({ type: "RESET" });
  }

  return {
    value: value,
    hasError,
    enterValueHandler,
    userBlurHandler,
    valueIsValid: valueIsValid,
    reset,
  };
};
export default useInput;
