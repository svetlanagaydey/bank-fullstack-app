import React, { useState, useContext, useEffect } from "react";
import myApi from '../../../api/Api';
import './transferPage.css';
import { Context } from "../../../Context";

const TransferClient = (props) => {
	const [passport, setPassport] = useState();
	const [client, setClient] = useState();
	const [isUser, setIsUser] = useState(false);
	const type = props.type;


	const [context, setContext] = useContext(Context);

	const onHandleChange = (e) => {
		setPassport(e.target.value)	
	}

	useEffect(() => {
console.log(client);
console.log(isUser)
	}, [isUser])

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
		<div className={type}>
			<form action="" name={type} onSubmit={onHandleSubmit}>
				<label htmlFor=""></label>
				<input type="text" onChange={(e) => onHandleChange(e)} />
				<button type='submit'>Find</button>
			</form>
			{isUser && (
				<div className="transfer__client-data">
					<div className="transfer__client-field">
						<span className="transfer__field-name">Name: </span>
						<span className="transfer__field-value">{client.firstName} {client.lastName}</span>
					</div>
					<div className="transfer__client-field">
						<span className="transfer__field-name">Cash: </span>
						<span className="transfer__field-value">{client.cash}</span>
					</div>
					<div className="transfer__client-field">
						<span className="transfer__field-name">Credit: </span>
						<span className="transfer__field-value">{client.credit}</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default TransferClient;