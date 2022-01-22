import React from 'react';
import Header from '../../../Components/Header/Header';
import './userPage.css';
import { useState, useEffect } from "react";
import myApi from '../../../api/Api';

const UserPage = () => {
    const [searchingId, setSearchingId] = useState("");
    const [currentUser, setCarrentUser] = useState();

    const findUser = async() => {
        console.log("yes");
        const { data } = await myApi.get(`/users/${searchingId}`);
        setCarrentUser(data);
        console.log(data)
    }
    useEffect(() => {

    },[currentUser])
    const printUserInfo = () => {
        return (
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
        )
    }
    return (
        <div className="container userPage">
            <Header />
            <h2 className="user-header">Client Operations</h2>
            <form className="search-id-bloc">
                <label>Enter Client's Id for search: </label>
                <input type="text" name="searchingId" value={searchingId}
                    onChange={(e) => {setSearchingId(e.target.value)}}
                 />
                <button className="searchButton" type="button" onClick={() => findUser()}>Find</button>
            </form>
            {currentUser && printUserInfo()}
        </div>
    )
}

export default UserPage;