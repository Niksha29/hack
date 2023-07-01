import React from "react";
import { useNavigate } from 'react-router-dom';
import './Sign.css';

function Sign() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login' , { replace: true });
    };

    return (
        <div className="form-container">
            <p className="title">Sign Up</p>
            <form className="form">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="" />
                </div>
                <br />
                <br />
                <button className="sign">Sign Up</button>
            </form>

            <p className="Login">
                Already have an account?
                <a rel="noopener noreferrer" href=" " className="" onClick={handleLoginClick}>Log In</a>
            </p>
        </div>
    )

}

export default Sign;
