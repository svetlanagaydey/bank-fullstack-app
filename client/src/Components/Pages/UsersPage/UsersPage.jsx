import React, {useState, useEffect} from 'react';
import Header from '../../Header/Header';
import myApi from '../../../api/Api'
//import { Link } from 'react-router-dom';
import './usersPage.css';

const UsersPage = () => {
    const [data, setData] = useState([]);
	useEffect(() => {
		getReq()
	}, []);

	const getReq = async () => {
		const { data } = await myApi.get('/users');
		setData(data.users);
	};
  
	const print = () => {
		console.log(data)
		return (
			<ul className="clients-list">
				{data.map((user, index) => {
					return (
						<li className="client" key={index}>
							<span className="client-icon"></span>
							<div className="info-block">
								<p className="id">id: {user._id}</p>
								<p className="credit">credit: {user.cash}</p>
								<p className="cash">cash: {user.credit}</p>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
    return (
        <div className="container">
            <Header />
            <h2 className="users-header">List of all users</h2>
				{print()}
        </div>
    )
}

export default UsersPage;