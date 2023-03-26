import useInput from "../hooks/use-input";


let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const BasicForm = (props) => {

  const {
    value: enteredName,
    hasError: enteredNameHasError,
    enterValueHandler: nameChangeHandler,
    userBlurHandler: nameBlurHandler,
    valueIsValid: enteredNameIsValid,
    reset: resetName,
  } = useInput((name) => name.trim() !== "");
  const {
    value: enteredLastname,
    hasError: enteredLastnameHasError,
    enterValueHandler: lastnameChangeHandler,
    userBlurHandler: lastnameBlurHandler,
    valueIsValid: enteredLastnameIsValid,
    reset: resetLastname,
  } = useInput((lastname) => lastname.trim() !== "");
  const {
    value: enteredEmail,
    hasError: enteredEmailHasError,
    enterValueHandler: emailChangeHandler,
    userBlurHandler: emailBlurHandler,
    valueIsValid: enteredEmailIsValid,
    reset: resetEmail,
  } = useInput((email) => email.match(mailFormat));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredLastnameIsValid)  {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredEmail, enteredLastname, enteredName)
    resetName();
    resetLastname();
    resetEmail();
  };

  const formValidationName = `${
    enteredNameHasError ? "invalid input form-control" : "form-control"
  }`;
  const formValidationLastname = `${
    enteredLastnameHasError ? "invalid input form-control" : "form-control"
  }`;

  const formValidationEmail = `${
    enteredEmailHasError ? "invalid input form-control" : "form-control"
  }`;


  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={formValidationName}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
          {enteredNameHasError && <p className="error-text">Name is not valid!</p>}
        </div>
        <div className={formValidationLastname}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastnameChangeHandler} onBlur={lastnameBlurHandler} value={enteredLastname}/>
          {enteredLastnameHasError && <p className="error-text">Lastname is not valid!</p>}
        </div>
      </div>
      <div className={formValidationEmail}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {enteredEmailHasError && <p className="error-text">Email is not valid!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
