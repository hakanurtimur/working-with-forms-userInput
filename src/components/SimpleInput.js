import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; //email-validation

  const enteredEmailIsValid = enteredEmail.match(mailFormat);
  const emailIsInvalid = !enteredEmailIsValid && emailTouched;

  const enteredNameIsValid = enteredName.trim() !== "";

  const inputIsInValid = !enteredNameIsValid && inputTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) { //updated form validation
    formIsValid = true;
  }

  const enterNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const userBlurHandler = (event) => {
    setInputTouched(true);
    console.log(enteredNameIsValid);
  };

  const emailBlurHandler = (event) => {
    setEmailTouched(true);
  };

  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    setInputTouched(true);
    setEmailTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail)
    setEnteredName("");
    setInputTouched(false);
    setEnteredEmail("");
    setEmailTouched(false);
  };

  const formValidationName = `${
    inputIsInValid ? "invalid input form-control" : "form-control"
  }`;

  const formValidationEmail = `${
    emailIsInvalid ? "invalid input form-control" : "form-control"
  }`;

  return (
    <form onSubmit={submitFormHandler}>
      <div className={formValidationName}>
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
      <div className={formValidationEmail}> {/* new email div */}
        <label htmlFor="e-mail">Your E-mail</label>
        <input
          type="text"
          id="e-mail"
          onChange={enteredEmailHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailIsInvalid && <p className="error-text">E-mail is not valid!</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
