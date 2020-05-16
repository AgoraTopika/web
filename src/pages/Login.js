import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Forms.css';
import '../styles/LoginAndSignUp.css';

export default class Login extends Component {
    render() {
        return (
            <div className="LoginAndSignUp">
                <h2>Login</h2>
                <p>
                    Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
                </p>
                <form method='post' action='/login'>
                    <input type='email' name='email' placeholder='Email' required />
                    <input type='password' name='password' placeholder='Password' required />
                    <input type='submit' />
                </form>
            </div>
        );
    }
}
