import React from 'react';
import Header from '../../../Components/Header/Header';
import './userPage.css';
import { useState, useEffect } from "react";
import myApi from '../../../api/Api';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import CurrentUser from './CurrentUser';
import Options from './Options';

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
            {currentUser && 
              (<>
                <CurrentUser currentUser={currentUser} />
                <Options currentUser={currentUser}/>
              </>)
            }
            {!isUser && <ErrorMessage />}
        </div>
    )
}
export default UserPage;