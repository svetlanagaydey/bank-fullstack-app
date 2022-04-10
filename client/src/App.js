import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StartPage from './Components/Pages/StartPage/StartPage';
import UserPage from './Components/Pages/UserPage/UserPage';
import UsersPage from './Components/Pages/UsersPage/UsersPage';
import TransferPage from './Components/Pages/TransferPage/TransferPage';
import AddUser from './Components/Pages/AddUser/AddUser';
import DeleteUser from './Components/Pages/DeleteUser/DeleteUser';
import Withdraw from './Components/Pages/Whithdraw/Withdraw';
import Deposit from './Components/Pages/Deposit/Deposit';
import Update from './Components/Pages/Update/Update';

function App() {
  return (
    <Router >
      <div>
        <Routes> 
            <Route path="/" exact element={<StartPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/withdraw" element={<Withdraw/>}/>
            <Route path="/deposit" element={<Deposit/>}/>
            <Route path="/transfer" element={<TransferPage/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/add" element={<AddUser/>}/>
            <Route path="/delete" element={<DeleteUser/>}/>
        </Routes> 
      </div>
    </Router>
  )
}
export default App;