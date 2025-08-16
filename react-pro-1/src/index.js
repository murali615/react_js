import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Login} from './auth/Login';
import {SignUp} from './auth/SignUp';
import {Home} from './HOME/Home';
import {Form} from './Form';
import{Productslist} from './Products/Productslist';
import UpdateProfile from './UPDATE-PROF/UpdateProfile'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/sign" Component={SignUp}/>
      <Route path="/Login" Component={Login}/>
      <Route path="/Form" Component={Form}/>
      <Route path="/Products" Component={Productslist}/>
      <Route path="/UpdateProfile" Component={UpdateProfile}/>
    </Routes>
    </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
