import React from "react";


import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
 
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import '../sign-up/sign-up.style.scss';



class SignUp extends React.Component {
    constructor() {
      super()
    
      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmpassword: ''
      }
    }  
    
    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmpassword } = this.state;

        if(password != confirmpassword) {
            alert("password don't match");
            return;
        }
        try{ 
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
             });

        }catch(error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const{ name, value } = event.target;

        this.setState({[name]: value});
    }
    
  render() {
      const {displayName, email, password, confirmpassword } = this.state;
    return (
      <div className="sign-up">
          <h2 className="title">I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
              type='text'
              name= 'displayName'
              value={displayName}
              onChange={this.handleChange}
              label='Display Name'
              required
              />

             

              <FormInput
              type='email'
              name= 'email'
              value={email}
              onChange={this.handleChange}
              label='email'
              required
              />

              

              <FormInput
              type='password'
              name= 'password'
              value={password}
              onChange={this.handleChange}
              label='password'
              required
              />

              <FormInput
              type='password'
              name= 'confirmpassword'
              value={confirmpassword}
              onChange={this.handleChange}
              label='confirmpassword'
              required
              />

            
              <CustomButton type='submit'>SIGN UP </CustomButton>
              
          </form>
      </div>
    )
  }
}

export default SignUp;