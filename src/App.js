import React, { component } from 'react';

import { connect } from 'react-redux';
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
       {/* <Route exact path='/signin' render={() => this.props.currentUser ? ( <HomePages />  ) : (<SignInAndSignUpPage/> )} /> */}
      <Route exact path='/signin' element={ <SignInAndSignUpPage /> } />
     </Routes>
     
     
     </>
 );

  }
 
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

});

export default connect(mapStateToProps,mapDispatchToProps )(App);
  