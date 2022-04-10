import React from 'react';
import Header from '../../../Components/Header/Header';
import './deleteUser.css';
import { useState, useEffect } from "react";
//import { useState, useEffect } from "react";

import myApi from '../../../api/Api';
const DeleteUser = () => {
  const [isDeleted, setIsDeleted] = useState(false);
    const user = (JSON.parse (localStorage.getItem('userToDelete')));
    console.log(user);

  useEffect(() => {
    if (isDeleted) printSuccessMessage();
  },[isDeleted]);

    const deleteUser = async() => {
      console.log("trying")
      try {
        if(user) {
          myApi.delete(`/users/${user._id}`);
          //localStorage.clear('userToDelete');
          printSuccessMessage()
          setIsDeleted(true);
          console.log(isDeleted)
        }
      } catch (e) {
        console.log(e);
      }
    }

    const printSuccessMessage = () => {
      return (
        <h2 className="successMessage">The client was successfully deleted</h2>
      )
    }

    const printUserInfo = () => {
      return (
        <div>
          <h2 className="deleteMainTitle">Do you shure DELETE Client?</h2>
          <div className="deleteCard">
            <h3 className="deleteTitle">CLIENT INFO</h3>
            <div className="userInfo">
              <ul className="userAttributesList">
                <li className="userAttribute">
                  <span className="attributeLable">ID: </span>
                  <span className="attributeValue">{user._id}</span>
                </li>
                <li className="userAttribute">
                  <span className="attributeLable">Name: </span>
                  <span className="attributeValue"> {user.firstName} {user.lastName}</span>
                </li>
                <li className="userAttribute">
                  <span className="attributeLable">Cash: </span>
                  <span className="attributeValue">{user.cash}</span>
                </li>
                <li className="userAttribute">
                  <span className="attributeLable">Credit: </span>
                  <span className="attributeValue">{user.credit}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="deleteButton" onClick={deleteUser}>DELETE</div>
        </div>
      )
    }
    return (
      <div className="container">
        <Header />
        {isDeleted ? printSuccessMessage() : printUserInfo()} 
      </div>
    )
}
export default DeleteUser;