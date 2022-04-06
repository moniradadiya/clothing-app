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





function App() {
  return (  
       <>
    <Header/>
      <Routes>
        <Route exact path="/" element={ <HomePages /> } />
        <Route exact path="/shop" element={ <ShopPage />} />

      </Routes>
      </>
  );
}

export default App;
