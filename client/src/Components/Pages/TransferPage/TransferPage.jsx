import React from 'react';
import Header from '../../Header/Header';
import TransferClient from './TransferClient';
import { useState, useContext } from "react";
import './transferPage.css';
import { Context } from '../../../Context';
import myApi from '../../../api/Api';


const TransferPage = () => {
  const [amount, setAmount] = useState(0);
  const [context, setContext] = useContext(Context);

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
			})
			console.log("withdrawed")
		} catch (err) {
			console.log(err.message);
		}

    try {
			await myApi.put(`/users/deposit/${context.to._id}`, {
				amount: parseFloat(amount)
			})
			console.log("deposited")
			
		} catch (err) {
			console.log(err.message);
		}
  }

  return (
    
      <div className="container">
        <Header />
        <h2 className="transfer-header">Transfer money</h2>
        <TransferClient type="transfer-from" />
        <TransferClient type="transfer-to" />
        <form action="" onSubmit={transfer}>
          <input type="text" onChange={(e) => onAmountChange(e)}/>
          <button type='submit'>Transfer</button>
        </form>
      </div>
   
  )
}

export default TransferPage;