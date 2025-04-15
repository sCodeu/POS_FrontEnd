import React, { useState } from "react";
import "./Login.css";

const Login : React.FC = () => {
    const [userName , setUserName]= useState('');
    const [password , setPassword ] = useState('');

    const handleLogin = async (e : React.FormEvent) => {
        e.preventDefault();

        if( userName == "admin" && password == "1234"){
            localStorage.setItem('token','mock');
            localStorage.setItem('role','admin');
            window.location.href = "/home";
        }
        else if( userName == "user" && password == "1234"){
            localStorage.setItem('token','mock');
            localStorage.setItem('role','user');
            window.location.href = "/home";
        }
        else{
            alert("Invalid Password or Username !")
        }
    }

    return (
        <div className = "login-container">
            
            <form onSubmit = {handleLogin} className = "login-form">
            <img src = "src/pages/Login/POS.png" alt = "logo" className = "login-logo"/>
                <input value = {userName} onChange = { e => setUserName(e.target.value)} placeholder = "Username"/>
                <input value = {password} onChange= { e => setPassword(e.target.value)} placeholder = "Password"/>
                <button type = "submit" >Login</button>
            </form>
        </div>
    );
}

export default Login ;