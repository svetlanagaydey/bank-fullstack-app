import React from 'react';
import Header from '../../Header/Header';
import { useState, useEffect } from "react";
import './deposit.css';


const Deposit = () => {
    return (
        <div className="container">
            <Header />
            <h2 className="">Enter deposit amount: </h2>
        </div>
    )
}

export default Deposit;