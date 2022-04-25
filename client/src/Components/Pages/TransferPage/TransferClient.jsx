import React, { useState, useEffect } from "react";
import myApi from '../../../api/Api';
import './transferPage.css';

const TransferClient = (props) => {
	const [passport, setPassport] = useState();
	const [client, setClient] = useState();
	const [isUser, setIsUser] = useState(false);
	const className = props.type;

	useEffect(() => {
		console.log(passport)
	}, [passport])

	useEffect(() => {
		//console.log(client)
	}, [client])

	const onHandleChange = (e) => {
		setPassport(e.target.value)	
	}

	const onHandleSubmit = async(e) => {
		e.preventDefault();
		try {
			console.log(passport)
			const data = await myApi.get(`/users/transfer/${passport}`);
			console.log(data.data)
			setClient(data.data); 
			setIsUser(true);
		} catch (e) {
			setIsUser(false);
			setClient("");
			console.log(e);
		}
	}
	return (
		<div className={className}>
			<form action="" onSubmit={onHandleSubmit}>
				<label htmlFor=""></label>
				<input type="text" onChange={(e) => onHandleChange(e)} />
				<button type='submit'>Find</button>
			</form>
		</div>
	)
}

export default TransferClient;