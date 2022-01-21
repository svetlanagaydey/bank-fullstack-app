import React from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import './usersPage.css';

const UsersPage = () => {
    return (
        <div className="container">
            <Header />
            <h2 className="users-header">List of all users</h2>
        </div>
    )
}

export default UsersPage;