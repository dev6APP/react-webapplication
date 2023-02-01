import * as React from 'react';
import './App.css';

import { BrowserRouter} from "react-router-dom";

import Sidebar from './components/basics/sidebar/sidebar';
import Content from './components/basics/layout/content';

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  /* Form */
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [rPassword, setRPassword] = React.useState(null);
  const [isLogin, setIsLogin] = React.useState(true);
  const [user, setUser] = React.useState(null);

  if(!user){
    return (
      <div className={isOpen ? "" : "navClose"} id="App">
        <BrowserRouter>
          <Sidebar openNav={toggleNav} isOpen={isOpen}/>
          <Content />
        </BrowserRouter>
      </div>
    );
  }

  if(user){
    return(
      <div className='loginPage' id="App">
        <div>
          <h1>{isLogin ? 'Log in' : 'Register'}</h1>
          <div className='inputsLoginPage'>
            <input type='text' name='email' placeholder='E-mail' onChange={handleEmail}/>
            <input type='text' name='wachtwoord' placeholder='Password' onChange={handleWachtwoord}/>
            {!isLogin && (
              <div>
                <input type='text' name='rWachtwoord' placeholder='Repeat password' onChange={handleRWachtwoord}/>
                <button onClick={register}>Register</button>
                <div className='toggleLogin' onClick={toggleLogin}>I already have an account</div>
              </div>
            )}
            {isLogin && (
              <div>
                <button onClick={login}>Login</button>
                <div className='toggleLogin' onClick={toggleLogin}>I do not have an account</div>
              </div>
            )}
          </div>
        </div>
      </div>
    ); 
  }

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function handleWachtwoord(e){
    setPassword(e.target.value)
  }

  function handleRWachtwoord(e){
    setRPassword(e.target.value)
  }

  function login(){
    console.log("Login");
    console.log(email, password, rPassword)
    setUser("")
  }

  function register(){
    console.log("Register")
    setUser("")
  }

  function toggleLogin(){
    setIsLogin(!isLogin);
  }

  function toggleNav(){
    setIsOpen(!isOpen);
  }

/*   function logOut(){
    setUser(null);
  } */
}