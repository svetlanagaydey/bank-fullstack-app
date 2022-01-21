import React from 'react';
import Header from '../../../Components/Header/Header';
import './userPage.css';

const UserPage = () => {
    return (
        <div className="container userPage">
            <Header />
            <h2 className="user-header">User Operations</h2>
        </div>
    )
}

export default UserPage;