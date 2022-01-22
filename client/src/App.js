import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StartPage from './Components/Pages/StartPage/StartPage';
import UserPage from './Components/Pages/UserPage/UserPage';
import UsersPage from './Components/Pages/UsersPage/UsersPage';
import TransferPage from './Components/Pages/TransferPage/TransferPage';
import AddUser from './Components/Pages/AddUser/AddUser';

function App() {
  return (
    
    <Router >
      <div>
        <Routes> 
            <Route path="/" exact element={<StartPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/transfer" element={<TransferPage/>}/>
            <Route path="/add" element={<AddUser/>}/>
        </Routes> 
      </div>
    </Router>
  
  )
}
export default App;