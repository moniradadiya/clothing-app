import React, { component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './component/header/header.component';
import HomePages from './pages/homepages/homepages.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';






class App extends React.Component {
  constructor() {
    super()
  
    this.state = {
      currentUser: null
    }
  }
  unsubcribeFromAuth = null

  componentDidMount(){
   this.unsubcribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();

  }
  render() {
    return (  
      <>
   <Header currentUser={this.state.currentUser}/>
   
     <Routes>
       <Route exact path="/" element={ <HomePages /> } />
       <Route exact path="/shop" element={ <ShopPage />} />
       <Route exact path='/signin' element={ <SignInAndSignUpPage/> } />

     </Routes>
     
     </>
 );

  }
 
}

export default App;
