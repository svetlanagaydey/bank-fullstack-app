import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StartPage from './Components/Pages/StartPage/StartPage';
import UserPage from './Components/Pages/UserPage/UserPage';
import UsersPage from './Components/Pages/UsersPage/UsersPage';
import TransferPage from './Components/Pages/TransferPage/TransferPage';
import AddUser from './Components/Pages/AddUser/AddUser';
// import myApi from './api/Api';
// import { useEffect, useState } from "react";


function App() {
  return (
    <BrowserRouter >
      <div>
          <Route path="/" exact component={StartPage}/>
          <Route path="/user" component={UserPage}/>
          <Route path="/users" component={UsersPage}/>
          <Route path="/transfer" component={TransferPage}/>
          <Route path="/add" component={AddUser}/>
      </div>
  </BrowserRouter>
  )
}
export default App;