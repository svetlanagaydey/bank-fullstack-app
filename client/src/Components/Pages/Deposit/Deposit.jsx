import React from 'react';
import Header from '../../Header/Header';
import { useState, useEffect } from "react";
import myApi from '../../../api/Api'
import './deposit.css';


const Deposit = () => {
    const [isDeposited, setIsDeposited] = useState(false);
	const [inputDeposit, setInputDeposit] = useState(0);

	const inputRef = React.createRef();
	const user = (JSON.parse (localStorage.getItem('userToDelete')));

	useEffect(() => {
        inputRef.current.focus();
    },[]);

	const deposit = async(e) => {
		e.preventDefault();
		try {
			await myApi.put(`/users/deposit/${user._id}`, {
				amount: parseFloat(inputDeposit)
			})
			setIsDeposited(true);
			
		} catch (err) {
			console.log(err.message);
		}
	}

	const printUserInfo = () => {
		return (
			<div>
				<div className="withdrawCard">
					<p className="withdrawTitle">CURRENT BALLANCE: <span className="currentSum">{user.cash} </span>&#8362;</p>
					<div className="userInfo">
						<ul className="userAttributesList">
							<li className="userAttribute">
								<span className="attributeLable">PASSPORT: </span>
								<span className="attributeValue"> {user.passport}</span>
							</li>

							<li className="userAttribute">
								<span className="attributeLable">Name: </span>
								<span className="attributeValue"> {user.firstName} {user.lastName}</span>
							</li>

							<li className="userAttribute">
								<span className="attributeLable">Credit: </span>
								<span className="attributeValue">{user.credit}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}

	const printSuccessMessage = () => {
		return (
      <div className="successMesage">
        <p>Client's account DEPOSITED SUCCESSFULLY!</p>
      </div>
    )
	}

	return (
		<div className="container">
			<Header />
			{isDeposited && printSuccessMessage()}
			{!isDeposited && (
				<form className='input-block' onSubmit={deposit}>
					<input type="number" className="withdrawInput" id="withdraw" onChange={(e) => setInputDeposit(e.target.value)} placeholder="Enter deposit amount: " ref={inputRef}></input>
					<button type="submit" className="withdrawButton">DEPOSIT</button>
				</form>
			)}
			{printUserInfo()}
		</div>
	)
}
export default Deposit;