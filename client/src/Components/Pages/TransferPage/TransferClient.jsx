import React, { useState, useContext } from "react";
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

	const onHandleSubmit = async(e) => {
		e.preventDefault();
		try {
			console.log(passport)
			const data = await myApi.get(`/users/transfer/${passport}`);
			// console.log(data.data)
			setClient(data.data);
			console.log(e.target.name)
			if (e.target.name === "transfer-from") {
				setContext({...context, from: data.data});
			}
			if (e.target.name === "transfer-to") {
				setContext({...context, to: data.data})
			}
			setIsUser(true);
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
		</div>
	)
}

export default TransferClient;