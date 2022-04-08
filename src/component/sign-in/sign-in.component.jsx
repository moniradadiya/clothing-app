import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
// import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


import FormInput from "../form-input/form-input.component";

import '../sign-in/sign-in.style.scss'

class SignIn extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password: ''
      }
    }


 handleSubmit = event => {
     event.preventDefault();

     this.state({email: '', password: ''})
 }


 handleChange = event => {
     const { value, name } = event.target;

     this.setState({ [name]: value });  
 }; 



    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label='email' required/>
                    
                    <FormInput
                    name="password" 
                    type="password"
                     value={this.state.email}
                     handleChange={this.handleChange}
                     label='password'
                      required/>
                    

                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton>SIGN IN WITH GOOGLE</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;