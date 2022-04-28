import React from 'react';
import Header from '../../../Components/Header/Header';
import './userPage.css';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import myApi from '../../../api/Api';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import CurrentUser from './CurrentUser';

const UserPage = () => {
    const [searchingPassport, setSearchingPassport] = useState("");
    const [currentUser, setCarrentUser] = useState("");
    const [isUser, setIsUser] = useState(true);
    const inputRef = React.createRef();

    const findUser = async(e) => {
      e.preventDefault();
      try {
        console.log(searchingPassport)
        const data = await myApi.get(`/users/transfer/${searchingPassport}`);
        console.log(data.data)
        setCarrentUser(data.data); 
        setIsUser(true);
      } catch (e) {
        setIsUser(false);
        setCarrentUser("");
        console.log(e);
      }
    }
    
    useEffect(() => {
        inputRef.current.focus();
    },[currentUser]);

    const setUserToLocal = () => {
      localStorage.setItem('userToDelete', JSON.stringify(currentUser));
      console.log(currentUser);
    }

    const printUserInfo = () => {
      return (
        <div className="userOptions">
          <CurrentUser currentUser={currentUser} />
          <ul className="options-list">
            <li className="userOption deposit"
            onClick={ () => setUserToLocal()}>
              <Link to="/deposit">
                <span className="icon depositIcon"></span>
                Deposit
              </Link>
            </li>
                
            <li className="userOption withdraw" 
            onClick={ () => setUserToLocal()}>
              <Link to="/withdraw" state={{ currentUser: {currentUser} }}>
                <span className="icon withdrawIcon"></span>
                Withdraw
              </Link>
            </li>
            <li className="userOption updateName">
              <Link to="/update" state={{ client: currentUser }} >
                <span className="icon updateNameIcon"></span>
                Update
              </Link>
            </li>
            <li className="userOption delete"
            onClick={ () => setUserToLocal()}>
              <Link to="/delete">
                <span className="icon deleteIcon"> </span>
                Delete
              </Link>
            </li>
          </ul>
        </div>
        )
    }
    
    return (
        <div className="container userPage">
            <Header />
            <h2 className="user-header">Find Client by Passport</h2>
            <form className="searching-bloc" onSubmit={findUser}>
              <input type="text" name="searchingId"
                value={searchingPassport} ref={inputRef} 
                placeholder="Enter Passport"
                onChange={(e) => {setSearchingPassport(e.target.value)}}
              />
              <button className="searchButton" type="submit">Find</button>
            </form>
            {currentUser && printUserInfo()}
            {!isUser && <ErrorMessage />}
        </div>
    )
}
export default UserPage;