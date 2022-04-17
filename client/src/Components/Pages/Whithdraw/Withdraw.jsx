import Header from '../../Header/Header';
import React, { useState, useEffect } from "react";
import myApi from '../../../api/Api';
import './withdraw.css';

//ToDo: update current ballance after withdrowing
//ToDo: create error messages

const Withdraw = () => {
	const [currentUser, setCarrentUser] = useState(JSON.parse (localStorage.getItem('userToDelete')));
	const [isWithdrawed, setIsWithdrawed] = useState(false);
	const [inputWithdraw, setInputWithdraw] = useState(0);

	const inputRef = React.createRef();
	// const user = (JSON.parse (localStorage.getItem('userToDelete')));

	useEffect(() => {
		inputRef.current.focus();
	},[]);

	useEffect(() => {
		updateUser();
	},[isWithdrawed]);

	const withdrow = async(e) => {
		e.preventDefault();
		console.log(currentUser.firstName)
		try {
			await myApi.put(`/users/withdraw/${currentUser._id}`, {
				amount: inputWithdraw
			})
			console.log(inputWithdraw)
			setIsWithdrawed(true);
		} catch (err) {
			console.log(err.message);
		}
	}

	const updateUser = async () => {
		try {
			const data = await myApi.get(`/users/user/${currentUser._id}`);
			setCarrentUser(data.data.user); 
		} catch (e) {
			console.log(e);
		}
	}

	const printUserInfo = () => {
		return (
			<div>
				<div className="withdrawCard">
					<p className="withdrawTitle">CURRENT BALLANCE: <span className="currentSum">{currentUser.cash} </span>&#8362;</p>
					<div className="userInfo">
						<ul className="userAttributesList">
							<li className="userAttribute">
								<span className="attributeLable">PASSPORT: </span>
								<span className="attributeValue"> {currentUser.passport}</span>
							</li>

							<li className="userAttribute">
								<span className="attributeLable">Name: </span>
								<span className="attributeValue"> {currentUser.firstName} {currentUser.lastName}</span>
							</li>

							<li className="userAttribute">
								<span className="attributeLable">Credit: </span>
								<span className="attributeValue">{currentUser.credit}</span>
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
        <p>Client's account WITHDRAWED SUCCESSFULLY!</p>
      </div>
    )
	}

	return (
		<div className="container">
			<Header />
			{isWithdrawed && printSuccessMessage()}
			{!isWithdrawed && (
				<form className='input-block' onSubmit={withdrow}>
					<input type="number" className="withdrawInput" id="withdraw" onChange={(e) => setInputWithdraw(e.target.value)} placeholder="Enter withdraw amount: " ref={inputRef} ></input>
					<button type="submit" className="withdrawButton">WITHDRAW</button>
				</form>
			)}
			{printUserInfo()}
		</div>
	)
}

export default Withdraw;