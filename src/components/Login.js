import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from './auth'
import { Link } from "react-router-dom";


export default function Login({showalert}) {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?location.state.path:'/home'

    const checkUser = () => {
        if(email.length<1){
            // console.log("Email is required.")
            showalert("Email is required.",'danger')
        }

        if(password.length<1){
            // console.log("password is required.")
            showalert("Password is required.",'danger')
        }
        else{
          axios.post('http://localhost:8080/login', {
            "email": email,
            "password": password
          })
          .then((response) => {
            // console.log(response.data.email);
            // console.log("hihiih")
            auth.loginUser(response.data)
            showalert("Logged in successfully.",'succes')
            navigate(redirectPath,{ replace: true })

          }, (error) => {
            // console.log(error)
            // console.log("byeeee");
            showalert("Invalid Credentials",'danger')
            
          });

          // console.log(auth.user)
        }
        
    }


  return (
    <div className='container my-5 w-25'><br></br><br></br>
      <h3 style={{fontWeight: 'bold', color:"#a64848", fontSize: 25,}}>Login</h3><br></br>
      <form>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <label className="form-label" >Email address</label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <label className="form-label">Password</label>
        </div>

        {/* <!-- 2 column grid layout for inline styling --> */}
        <div className="row mb-4">
            <div className="col d-flex justify-content-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31"/>
                <label className="form-check-label" >Remember me</label>
            </div>
            </div>

            <div className="col">
            {/* <!-- Simple link --> */}
            <Link to="/forgotpassword">Forgotten Password</Link>
            </div>
        </div>

        {/* <!-- Submit button --> */}
        <button type="button" className="btn btn-primary btn-block mb-4" onClick={checkUser} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>

        {/* <!-- Register buttons --> */}
        <div className="text-center">
            <p>Not a member? <Link to="/register">Register Now</Link></p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
            </button>
        </div>
        </form>
    </div>
  )
}
