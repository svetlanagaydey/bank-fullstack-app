import React from 'react';
import Header from '../../Header/Header';
import TransferClient from './TransferClient';
import { useState, useContext } from "react";
import './transferPage.css';
import { Context } from '../../../Context';
import myApi from '../../../api/Api';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';


const TransferPage = () => {
  const [amount, setAmount] = useState(0);
  const [context, setContext] = useContext(Context);
  const [isTransfered, setIsTransfered] = useState(false);

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const transfer = async(e) => {
    e.preventDefault();
    console.log(amount);
    console.log(context);
    if (context.from.cash+context.from.credit < amount) {
      console.log("Not enouth money");
      return
    }
    try {
			await myApi.put(`/users/withdraw/${context.from._id}`, {
				amount: amount
			});
			console.log("withdrawed");
		} catch (err) {
			console.log(err.message);
		}

    try {
			await myApi.put(`/users/deposit/${context.to._id}`, {
				amount: parseFloat(amount)
			});
			console.log("deposited")
			
		} catch (err) {
			console.log(err.message);
		}
    setIsTransfered(true);
  }

  return (
    <div className="container">
      <Header />
      <h2 className="transfer-header">Transfer money</h2>
      <div className="transfer__clients-block">
        <TransferClient type="transfer-from" transferCompleted={isTransfered}/>
        <TransferClient type="transfer-to" transferCompleted={isTransfered}/>
      </div>
      {
        isTransfered 
        ?
          (<SuccessMessage action="Transfer" />)
        :
          <form action="" onSubmit={transfer} className="transfer-input transer-amount">
              <input type="text" onChange={(e) => onAmountChange(e)} placeholder="Enter Amount"/>
              <button type='submit' className="transfer-button" >Transfer</button>
          </form>
      }
    </div>
  )
}

export default TransferPage;