import React, {useState}from "react";
import { useNavigate } from 'react-router-dom';
import './Sign.css';
import axios from "axios";


function Sign() {
    const history=useNavigate();

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/signup",{
                username,password
            })
            .then(res=>{
                if(res.data="exist"){
                    alert("user already exists")
                }
                else if(res.data="exist"){
                    history("/home",{state:{id:username}})
                //    alert("user have not signup")
                }
            })
            .catch(e =>{
                alert("wrong details")
                console.log("nikhil")
            })


        }
        catch{
            console.log(e);
        }
    }

    return (
        <div className="form-container">
            <p className="title">Sign Up</p>
            <form className="form">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder=""  onChange={(e)=>{setUsername(e.target.value)}}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder=""  onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <br />
                <br />
                <button className="sign" onClick={submit}>Sign Up</button>
            </form>

            {/* <p className="Login">
                Already have an account?
                <a rel="noopener noreferrer" href=" " className="" onClick={handleLoginClick}>Log In</a>
            </p> */}
        </div>
    )

}

export default Sign;
