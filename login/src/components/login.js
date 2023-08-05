import React, { useState } from 'react'
import axios from "axios"
import "./login.css"

const Login = () => {
    const [userRegistration, setUserRegistration] = useState({
        email: " ",
        password: " "
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({...userRegistration, [name] : value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:5000/",{
                ...userRegistration
            })
        }
        catch(e){
            console.log("e");
        }
    }

  return (
    <>
      <div class ="main">
        <div class ="register">
        <form id="register" action="POST" onSubmit = {handleSubmit}>
        <div>
            <label htmlFor="email">Email : </label>
            <br/>
            <input type="text" autocomplete="off" placeholder="Enter Your Email"
            value = {userRegistration.email}
            onChange={handleInput}
            name="email" id="email"/>
        </div> 
        <br/>
        <div>
            <label htmlFor="password">Password : </label>
            <br/>
            <input type="text" autocomplete="off" placeholder="Enter Your Password"
            value = {userRegistration.password}
            onChange={handleInput}
            name="password" id="password"/>
        </div>
        <br/>

        <button type="submit" id="submit">Log In</button>
      </form>
        </div>
      </div>
    </>
  )
}

export default Login
