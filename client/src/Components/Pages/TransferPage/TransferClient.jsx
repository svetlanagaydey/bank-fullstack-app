import React, { useState, useContext, useEffect } from "react";
import myApi from '../../../api/Api';
import './transferPage.css';
import { Context } from "../../../Context";

const TransferClient = (props) => {
	const [passport, setPassport] = useState();
	const [client, setClient] = useState();
	const [isUser, setIsUser] = useState(false);

	const type = props.type;
	const transferCompleted = props.transferCompleted;

	const [context, setContext] = useContext(Context);

	const onHandleChange = (e) => {
		setPassport(e.target.value)	
	}

	useEffect(() => {
		transferCompleted && updateUser();
		transferCompleted && console.log(client.cash);
	},[transferCompleted]);

	const updateUser = async () => {
		try {
			const data = await myApi.get(`/users/user/${client._id}`);
			setClient(data.data.user); 
		} catch (e) {
			console.log(e);
		}
	}

	const onHandleSubmit = async(e) => {
		e.preventDefault();
		try {
			console.log(passport)
			const data = await myApi.get(`/users/transfer/${passport}`);
			setClient(data.data);
			setIsUser(true);
			console.log(e.target.name)
			if (e.target.name === "transfer-from") {
				setContext({...context, from: data.data});
			}
			if (e.target.name === "transfer-to") {
				setContext({...context, to: data.data})
			}
		} catch (e) {
			setIsUser(false);
			setClient("");
			console.log(e);
		}
	}
	return (
		<div className="transfer__client-section">
			<form action="" name={type} onSubmit={onHandleSubmit} className="transfer-input">
				<label htmlFor=""> Transfer {type==="transfer-from" ? "From" : "To"} : </label>
				<input type="text" onChange={(e) => onHandleChange(e)} placeholder="Enter passport" />
				<button type='submit' disabled={transferCompleted}>Find</button>
			</form>
			{isUser && (
				<div className="transfer__client">
					<span className={`icon-${type}`}></span>
					<div className="transfer__client-info">
						<div className="transfer__client-field transfer__name">
							{client.firstName} {client.lastName}
						</div>
						<div className="transfer__client-field">
							<span className="transfer__field-name">Ballance: </span>
							<span className="transfer__field-value transfer__ballance">{client.cash} &#8362;</span>
						</div>
						<div className="transfer__client-field">
							<span className="transfer__field-name">Credit: </span>
							<span className="transfer__field-value">{client.credit}</span> &#8362;
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default TransferClient;