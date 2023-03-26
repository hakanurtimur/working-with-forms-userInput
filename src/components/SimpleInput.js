import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";

  let inputIsInValid = !enteredNameIsValid && inputTouched;


  let formIsValid = false;

  if(enteredNameIsValid) {
    formIsValid = true;
  }

  const enterNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const userBlurHandler = (event) => {
    setInputTouched(true);
    console.log(enteredNameIsValid);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    setInputTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setInputTouched(false);
  };

  const formValidation = `${
    inputIsInValid ? "invalid input form-control" : "form-control"
  }`;

  return (
    <form onSubmit={submitFormHandler}>
      <div className={formValidation}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={enterNameHandler}
          onBlur={userBlurHandler}
        />
        {inputIsInValid && <p className="error-text">Name is not valid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
