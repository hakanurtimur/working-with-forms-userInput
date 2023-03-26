import useInput from "../hooks/input-hook";

const BasicForm = (props) => {
  const nameValidation = (name) => {
    if (name.trim() === "") {
      return false;
    } else {
      return true;
    }
  };

  const emailValidation = (email) => {
    var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailFormat)) {
      return true
    }else {
      return false
    }
  }

  const {
    userBlurHandler: enteredNameBlurHandler,
    enterInputHandler: enteredNameHandler,
    inputIsInValid: enteredNameIsInvalid,
    enteredInputIsValid: enteredNameIsValid,
    setInput: setName,
    setInputTouched: setNameTouched,
    input: enteredName,
    inputValidation: nameInputValidation,
  } = useInput(nameValidation);
  const {
    userBlurHandler: enteredLastNameBlurHandler,
    enterInputHandler: enteredLastNameHandler,
    inputIsInValid: enteredLastNameIsInvalid,
    enteredInputIsValid: enteredLastNameIsValid,
    setInput: setLastName,
    setInputTouched: setLastNameTouched,
    input: enteredLastName,
    inputValidation: lastNameInputValidation,
  } = useInput(nameValidation);
  const {
    userBlurHandler: enteredEmailBlurHandler,
    enterInputHandler: enteredEmailHandler,
    inputIsInValid: enteredEmailIsInvalid,
    enteredInputIsValid: enteredEmailIsValid,
    setInput: setEmail,
    setInputTouched: setEmailTouched,
    input: enteredEmail,
    inputValidation: emailInputValidation,
  } = useInput(emailValidation);


  let formIsValid = false;

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    setNameTouched(true);
    setLastNameTouched(true);
    setEmailTouched(true)
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setName("");
    setNameTouched(false);
    setLastName("")
    setLastNameTouched(false);
    setEmail("");
    setEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputValidation}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={enteredNameBlurHandler}
            onChange={enteredNameHandler}
            value={enteredName}
          />
          {enteredNameIsInvalid && (
            <p className="error-text">Name is not valid!</p>
          )}
        </div>
        <div className={lastNameInputValidation}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={enteredLastNameBlurHandler}
            onChange={enteredLastNameHandler}
            value={enteredLastName}
            
          />
          {enteredLastNameIsInvalid && (
            <p className="error-text">Lastname is not valid!</p>
          )}
        </div>
      </div>
      <div className={emailInputValidation} >
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" onBlur={enteredEmailBlurHandler} onChange={enteredEmailHandler} value={enteredEmail}/>
        {enteredEmailIsInvalid && (
            <p className="error-text">Email is not valid!</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
        
      </div>
    </form>
  );
};

export default BasicForm;
