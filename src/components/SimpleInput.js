import React from "react";
import useInput from "../hooks/use-input";
let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; //email-validation

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: enteredNameHasError,
    enterValueHandler: nameChangeHandler,
    userBlurHandler: nameBlurHandler,
    valueIsValid: enteredNameIsValid,
    reset: resetName,
  } = useInput((name) => name.trim() !== "");
  const {
    value: enteredEmail,
    hasError: enteredEmailHasError,
    enterValueHandler: emailChangeHandler,
    userBlurHandler: emailBlurHandler,
    valueIsValid: enteredEmailIsValid,
    reset: resetEmail,
  } = useInput((email) => email.match(mailFormat));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    resetName();
    resetEmail();
  };

  const formValidationName = `${
    enteredNameHasError ? "invalid input form-control" : "form-control"
  }`;

  const formValidationEmail = `${
    enteredEmailHasError ? "invalid input form-control" : "form-control"
  }`;

  return (
    <form onSubmit={submitFormHandler}>
      <div className={formValidationName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {enteredNameHasError && (
          <p className="error-text">Name is not valid!</p>
        )}
      </div>
      <div className={formValidationEmail}>
        {" "}
        {/* new email div */}
        <label htmlFor="e-mail">Your E-mail</label>
        <input
          type="text"
          id="e-mail"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailHasError && (
          <p className="error-text">E-mail is not valid!</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
