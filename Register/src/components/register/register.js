import React, { useState } from 'react'
import axios from "axios"
import "./register.css"

const Register = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: " ",
        number: " ",
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
            console.log("An error occurred during signup");
        }
    }

  return (
    <>
      <div class ="main">
        <div class ="register">
        <form id="register" action="POST" onSubmit = {handleSubmit}>
        <div>
            <label htmlFor="username">Name :</label>
            <br/>
            <input type="text" autocomplete="off" placeholder="Enter Your Name" 
            value = {userRegistration.username}
            onChange={handleInput}
            name="username" id="username"/>
        </div>
        <br/>
        <div>
            <label htmlFor="number">Number : </label>
            <br/>
            <input type="text" autocomplete="off" placeholder="Enter Your Number"
            value = {userRegistration.number}
            onChange={handleInput}
            name="number" id="number"/>
        </div>
        <br/>
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

        <button type="submit" id="submit">Sign Up</button>
      </form>
        </div>
      </div>
    </>
  )
}

export default Register
