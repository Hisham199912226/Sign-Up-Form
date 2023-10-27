import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.jsx'
import { v4 as uuidv4 } from 'uuid';
import { getUsers, addUser } from './data/mockDatabase';
function App() {
  const defaultUserValues = {
    id: uuidv4(),
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    agreeTermsCheckbox: false,
  }
  const [newUser, setNewUser] = useState(defaultUserValues);
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    showMessage: false,
  });

  function onChangeHandler(event){
    const name = event.target.name;
    let value = event.target.value;

    console.log(name);
    if(name === "agreeTermsCheckbox")
      value = event.target.checked;

    setNewUser({
      ...newUser,
      [name] : value
    });
  }

  function onSubmitHandler(event){
    event.preventDefault();

    if(!newUser.agreeTermsCheckbox){
      console.log("You have to agree the terms of service first!");
      setErrorMessage({
        message : "You have to agree the terms of service first!",
        showMessage: true,
      })
    }
    else{
      if(newUser.password === newUser.confirmPassword){
        addUser(newUser);
        setNewUser(defaultUserValues);
        console.log(getUsers());
        setErrorMessage({
          message : "User registered successfully!",
          showMessage: true,
        })
      }
      else{
        console.log("Password and Confirm Password do not match.");
        setErrorMessage({
          message : "Password and Confirm Password do not match.",
          showMessage: true,
        })
      }
      }
    }
   
  return (
    <div className="App">
      <Form newUser={newUser} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} errorMessage={errorMessage}/>
    </div>
  );
}

export default App;
