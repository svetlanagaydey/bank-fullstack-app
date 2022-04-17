import React from 'react';
import Header from '../../Header/Header';
import { useState, useEffect } from "react";
import myApi from '../../../api/Api'
import './deposit.css';


const Deposit = () => {
	const [currentClient,setCurrentClient] = useState(JSON.parse (localStorage.getItem('userToDelete')))
    const [isDeposited, setIsDeposited] = useState(false);
	const [inputDeposit, setInputDeposit] = useState(0);

	const inputRef = React.createRef();
	//const user = (JSON.parse (localStorage.getItem('userToDelete')));

	useEffect(() => {
        inputRef.current.focus();
    },[]);

	useEffect(() => {
		updateClient();
	}, [isDeposited])

	const deposit = async(e) => {
		e.preventDefault();
		try {
			await myApi.put(`/users/deposit/${currentClient._id}`, {
				amount: parseFloat(inputDeposit)
			})
			setIsDeposited(true);
			
		} catch (err) {
			console.log(err.message);
		}
	}

	const updateClient = async(e) => {
		try {
			const data = await myApi.get(`/users/user/${currentClient._id}`);
			setCurrentClient(data.data.user);
		} catch (e) {
			console.log(e);
		} 
	}

	const printUserInfo = () => {
		return (
			<div>
				<div className="withdrawCard">
					<p className="withdrawTitle">CURRENT BALLANCE: <span className="currentSum">{currentClient.cash} </span>&#8362;</p>
					<div className="userInfo">
						<ul className="userAttributesList">
							<li className="userAttribute">
								<span className="attributeLable">PASSPORT: </span>
								<span className="attributeValue"> {currentClient.passport}</span>
							</li>

							<li className="userAttribute">
								<span className="attributeLable">Name: </span>
								<span className="attributeValue"> {currentClient.firstName} {currentClient.lastName}</span>
							</li>

							<li className="userAttribute">
								<span className="attributeLable">Credit: </span>
								<span className="attributeValue">{currentClient.credit}</span>
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