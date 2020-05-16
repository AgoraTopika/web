import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Forms.css';
import '../styles/LoginAndSignUp.css';

export default class SignUp extends Component {
    render() {
        return (
            <div className="LoginAndSignUp">
                <h2>Sign Up</h2>
                <p>
                    Already have an account? <NavLink to="/login">Login</NavLink>
                </p>
                <form method='post' action='/signup'>
                    <input type='email' name='email' placeholder='Email' required />
                    <input type='text' name='givenName' placeholder='Given Name' />
                    <input type='text' name='familyName' placeholder='Family Name' />
                    <input type='password' name='password' placeholder='Password' required />
                    <input type='submit' />
                </form>
            </div>
        );
    }
}
