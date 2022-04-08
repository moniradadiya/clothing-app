import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import '../sign-up/sign-up.style.scss';

class SignUp extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         email:'',
         password: '',
         
      }
    }


 handleSubmit = event => {
     event.preventDefault();

     this.state({name:'', email:'', password:'', password: '' })
 }


 handleChange = event => {
     const { value, name } = event.target;

     this.setState({ [name]: value });  
 }; 



    render() {
        return(
            <div className="sign-up">
                <h2>I do not have account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput
                    name="Display Name" 
                    type="name"
                     value={this.state.email}
                     handleChange={this.handleChange}
                     label='Display Name'
                      required/>
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label='email' required/>
                    
                    <FormInput
                    name="password" 
                    type="password"
                     value={this.state.email}
                     handleChange={this.handleChange}
                     label='password'
                      required/>

              <FormInput
                    name="confirm password" 
                    type="password"
                     value={this.state.email}
                     handleChange={this.handleChange}
                     label='confirm password'
                      required/>
                    

                    <CustomButton type="submit">SIGN UP</CustomButton>
                   
                </form>
            </div>
        );
    }
}

export default SignUp;
