import React, { Component } from 'react';
import './login.css'
class Login extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="login">
                <div className="loginBox">
                 <img src="https://i.ya-webdesign.com/images/avatar-png-1.png" className="avatar"></img>
                 <h1 className="header1">Login here</h1>
                 <form>
                     <p>Username</p>
                     <input type="text" placeholder="Enter your username here"></input>
                     <p>Password</p>
                     <input type="password" placeholder="Enter your password here"></input>
                     <a href="#" >Forgot your password?</a>
                     <input type="submit"></input>
                 </form>
                </div>
            
            </div>
        )
    }
}
export default Login;