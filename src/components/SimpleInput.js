import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);


  

  const nameRef = useRef();

  const enterNameHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsValid(true);

      console.log(isValid)

  }
};

const userBlurHandler = event => {
  setInputTouched(true)
    if (enteredName.trim() === "") {
      setIsValid(false);

      
    } 

}



  const submitFormHandler = (event) => {
    event.preventDefault();

    setInputTouched(true)
    if (enteredName.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);
   
    setEnteredName("");
  };

  let inputIsInValid = (!isValid && inputTouched);
console.log(inputIsInValid)


  const formValidation = `${
    (inputIsInValid)? "invalid input form-control" : "form-control"
  }`;

  return (
    <form onSubmit={submitFormHandler}>
      <div className={formValidation}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={enterNameHandler}
          onBlur={userBlurHandler}
        />
        {(inputIsInValid) && <p className="error-text">Name is not valid!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
