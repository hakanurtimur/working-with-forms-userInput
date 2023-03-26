import { useState } from "react";

const useInput = (inputIsValid) => {
  const [input, setInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const enteredInputIsValid = inputIsValid(input);

  const inputIsInValid = !enteredInputIsValid && inputTouched;

  const enterInputHandler = (event) => {
    setInput(event.target.value);
  };

  const userBlurHandler = (event) => {
    setInputTouched(true);
  };


  const inputValidation = `${inputIsInValid ? 'invalid input form-control' : 'form-control'} `

  //   const submitFormHandler = (event) => {
  //     event.preventDefault();
  //     setInputTouched(true);

  //     if (!enteredInputIsValid) {
  //       return;
  //     }
  //     console.log(input);
  //     setInput("");
  //     setInputTouched(false);
  //   };



  return {
    userBlurHandler,
    enterInputHandler,
    inputIsInValid,
    enteredInputIsValid,
    setInput,
    setInputTouched,
    input,
    inputValidation
  };
};

export default useInput;
