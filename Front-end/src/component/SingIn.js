import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import { Link ,useHistory} from "react-router-dom";
import axios from 'axios'


export default function SignIn () {
    const history = useHistory()
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){ 
         axios.post('http://localhost:3000/client/signin',data)
         .then(response=>{
            
            console.log(response)
           history.push('/signin')
            })
        .catch(err=>console.log(err))
        
    }
    
        return (
                <div className="App">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form >
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
               <input type="number" name="phone" className="form-control" placeholder="Phone" {...register('phone')}/>
               <input type="text" name="phone" className="form-control" placeholder="Password" {...register('password')}/>

                <a href="#">Forgot your password?</a>
                <button>Login</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Hello friend!</h1>
                    <p>Login to your account</p>
                    <button className="ghost" id="signIn">Login</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                    <p>Dont have an account? <br/> Join us now</p>
                    <button className="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    <script src="main.js">

    </script>
    </div>
            // <form onSubmit={handleSubmit(onSubmit)}>
                
            //     <h3>Sign IN</h3>
            //     <div className="form-group">
            //         <label>phone</label>
            //         <input type="text" name="phone" className="form-control" placeholder="Phone" {...register('phone')}/>
            //     </div>
            //     <div className="form-group">
            //         <label>password</label>
            //         <input type="text" name="phone" className="form-control" placeholder="Password" {...register('password')}/>
            //     </div>
            //     <button type="submit" className="btn btn-danger ">Sign Up</button>
            //     <p className="forgot-password text-right">
            //         Already registered  <Link to={"/signin"}>Sign in</Link>
            //     </p>
            // </form>
            
        );
   
    
}