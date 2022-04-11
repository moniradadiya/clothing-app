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
import { auth, createUserProfileDocument  } from './firebase/firebase.utils';






class App extends React.Component {
  constructor() {
    super();
  
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
     

      }
      this.setState({ currentUser: userAuth });
     });
   }
 
  componentWillUnmount() {  
    this.unsubscribeFromAuth();

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
