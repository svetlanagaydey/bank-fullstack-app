import Header from '../../Header/Header';
import React, { useState } from "react";
import myApi from '../../../api/Api';
import './withdraw.css';

//ToDo: update current ballance after withdrowing
//ToDo: create error messages

const Withdraw = () => {
	const [isWithdrawed, setIsWithdrawed] = useState(false);
	const [inputWithdraw, setInputWithdraw] = useState(0);
	const user = (JSON.parse (localStorage.getItem('userToDelete')));
	const withdrow = async(e) => {
		e.preventDefault();
		console.log(user.firstName)
		try {
			await myApi.put(`/users/withdraw/${user._id}`, {
				amount: inputWithdraw
			})
			console.log(inputWithdraw)
			setIsWithdrawed(true);
			
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
					<input type="number" className="withdrawInput" id="withdraw" onChange={(e) => setInputWithdraw(e.target.value)} placeholder="Enter withdraw amount: "></input>
					<button type="submit" className="withdrawButton">WITHDRAW</button>
				</form>
			)}
			{printUserInfo()}
		</div>
	)
}

export default Withdraw;