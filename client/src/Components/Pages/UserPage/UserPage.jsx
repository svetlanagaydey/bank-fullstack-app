import React from 'react';
import Header from '../../../Components/Header/Header';
import './userPage.css';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import myApi from '../../../api/Api';

const UserPage = () => {
    const [searchingId, setSearchingId] = useState("");
    const [currentUser, setCarrentUser] = useState("");
    const [isUser, setIsUser] = useState(true);
    const inputRef = React.createRef();

    const findUser = async(e) => {
      e.preventDefault();
      try {
        console.log(searchingId)
        const data = await myApi.get(`/users/user/${searchingId}`);
        console.log(data.data.user)
        setCarrentUser(data.data.user); 
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
      //console.log(currentUser.user);
    }

    const printUserInfo = () => {
        return (
          <div className="userOptions">
            <div className="client">
              <span className="client-icon"></span>
              <div className="info-block">
                <p className="firstName"><span className="formSubtitles">First Name: </span>{currentUser.firstName}</p>
                <p className="lastName"><span className="formSubtitles">Last Name: </span>{currentUser.lastName}</p>
                <p className="id"><span className="formSubtitles">id: </span>{currentUser._id}</p>
                <p className="credit"><span className="formSubtitles">credit: </span>{currentUser.credit}</p>
                <p className="cash"><span className="formSubtitles">cash: </span>{currentUser.cash}</p>
              </div>
            </div>
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
              <li className="userOption updateName"
              >
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
    const printErrorMessage = () => {
      return (
      <div className="errorMessage"><span className="strong"> NOT FOUND!</span> Try enother one.</div>
      )
    }
    return (
        <div className="container userPage">
            <Header />
            <h2 className="user-header">Enter Client's ID to searching</h2>
            <form className="searching-bloc" onSubmit={findUser}>
                <input type="text" name="searchingId" value={searchingId} ref={inputRef} 
                    onChange={(e) => {setSearchingId(e.target.value)}}
                 />
                <button className="searchButton" type="submit">Find</button>
            </form>
            {currentUser && printUserInfo()}
            {!isUser && printErrorMessage()}
        </div>
    )
}
export default UserPage;