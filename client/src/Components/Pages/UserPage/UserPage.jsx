import React from 'react';
import Header from '../../../Components/Header/Header';
import './userPage.css';
import { useState, useEffect } from "react";
import myApi from '../../../api/Api';

const UserPage = () => {
    const [searchingId, setSearchingId] = useState("");
    const [currentUser, setCarrentUser] = useState("");
    const [isUser, setIsUser] = useState(true);
    const inputRef = React.createRef();

    const findUser = async() => {
      try {
        const { data } = await myApi.get(`/users/${searchingId}`);
        setCarrentUser(data); 
        setIsUser(true);
      } catch (e) {
        setIsUser(false);
        setCarrentUser("");
        console.log("catch")
        //console.log(e);
      }
    }
    useEffect(() => {
        inputRef.current.focus();
    },[currentUser]);

    const printUserInfo = () => {
        return (
          <div className="userOptions">
            <div className="client">
              <span className="client-icon"></span>
              <div className="info-block">
                <p className="firstName"><span className="formSubtitles">First Name: </span>{currentUser.user.firstName}</p>
                <p className="lastName"><span className="formSubtitles">Last Name: </span>{currentUser.user.lastName}</p>
                <p className="id"><span className="formSubtitles">id: </span>{currentUser.user._id}</p>
                <p className="credit"><span className="formSubtitles">credit: </span>{currentUser.user.cash}</p>
                <p className="cash"><span className="formSubtitles">cash: </span>{currentUser.user.credit}</p>
              </div>
            </div>
            <ul className="options-list">
              <li className="userOption deposit"> <span className="icon depositIcon"></span>Deposit</li>
              <li className="userOption withdraw"> <span className="icon withdrawIcon"></span>Withdraw</li>
              <li className="userOption updateName"> <span className="icon updateNameIcon"></span>Update</li>
              <li className="userOption delete"> <span className="icon deleteIcon"></span>Delete</li>
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
            <form className="searching-bloc">
                <input type="text" name="searchingId" value={searchingId} ref={inputRef} 
                    onChange={(e) => {setSearchingId(e.target.value)}}
                 />
                <button className="searchButton" type="button" onClick={() => findUser()}>Find</button>
            </form>
            {currentUser && printUserInfo()}
            {!isUser && printErrorMessage()}
        </div>
    )
}

export default UserPage;