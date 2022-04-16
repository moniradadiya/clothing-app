import React, { component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import './App.css';
import Header from './component/header/header.component';
import HomePages from './pages/homepages/homepages.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument  } from './firebase/firebase.utils';
import { setCurrentUser} from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';





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
        setCurrentUser(userAuth); 
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
       <Route exact path="/checkout" element={ <CheckoutPage />} /> 
       {/* <Route exact path='/signin' render={() => this.props.currentUser ? ( <HomePages />  ) : (<SignInAndSignUpPage/> )} /> */}
      <Route exact path='/signin' element={ <SignInAndSignUpPage /> } />
     </Routes>
     
     
     </>
 );

  }
 
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

});

export default connect(mapStateToProps,mapDispatchToProps )(App);
  