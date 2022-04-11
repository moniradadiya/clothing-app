import React, { component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';

import './App.css';
import Header from './component/header/header.component';
import HomePages from './pages/homepages/homepages.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument  } from './firebase/firebase.utils';
import { setCurrentUser} from './redux/user/user.action';






class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
   
    const{ setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
       
    
     

      }
        // setCurrentUser(userAuth)
     });
   }
 
  componentWillUnmount() {  
    this.unsubscribeFromAuth();

  }
  render() {
    return (  
      <>
   <Header/>
   
     <Routes>
       <Route exact path="/" element={ <HomePages /> } />
       <Route exact path="/shop" element={ <ShopPage />} />
       <Route exact path='/signin' element={ <SignInAndSignUpPage/> } />

     </Routes>
     
     </>
 );

  }
 
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

});

export default connect(null,)(App);
