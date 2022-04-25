import React from 'react';
import Header from '../../Header/Header';
import TransferClient from './TransferClient';
import { useState } from "react";
import './transferPage.css';


const TransferPage = () => {
  return (
    <div className="container">
      <Header />
      <h2 className="transfer-header">Transfer money</h2>
      <TransferClient type="transfer-from" />
      <TransferClient type="transfer-to" />
      
    </div>
  )
}

export default TransferPage;