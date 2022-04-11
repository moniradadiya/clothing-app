import { React, Component } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";



import FormInput from "../form-input/form-input.component";

import '../sign-in/sign-in.style.scss'

class SignIn extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password: ''
      }
    }


 handleSubmit = async event => {
     event.preventDefault();

     const { email, password } = this.state;
     
     try{
         await auth.signInWithEmailAndPassword(email, password);
     }catch(error) {
         console.log(error);
     }

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
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label='email' required />
                    
                    <FormInput
                    name="password" 
                    type="password"
                     value={this.state.password}
                     handleChange={this.handleChange}
                     label='password' 
                     autoComplete='off'
                      required />
                        
                    
                    <div className='buttons'>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    { <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                     { '' }
                     SIGN IN WITH GOOGLE  { '' }
                        </CustomButton> }
                        </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;