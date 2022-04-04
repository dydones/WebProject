import React, { useState } from "react";
import ReactDOM from "react-dom";
import Prompt from "react-router-dom";

import NavigationPanel from './NavigationPanel.js';
import "./Login.css";

import logo from './logo.svg';

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
 // const database = [
  //  {
   //   username: "user1",
    //  password: "pass1"
   // },
   // {
   //   username: "user2",
    //  password: "pass2"
   // }
  // ];

  const errors = {
    uname: "Invalid username",
    pass: "Onvalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
	
    var { username, password } = document.forms[0];
	
	var prompt = require('prompt');
	prompt.start();
	prompt.get(['username','password'],function(err,result){
		console.log('Command-line input received:');
		console.log('Username:'+ result.username);
		console.log('Password:'+ result.password);
	
	});
	
    // Find user login info
    const userData = prompt.find((username) => username);

    // Compare user info
    if (userData) {
      if (userData.password !== errors.pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" id="buttonSub"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="Login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);

export default Login;
