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
			<ul>
				{data.map((user, index) => {
					return (
						<li key={index}>
							<p className={user.id}>id: {user.id}</p>
							<p className="Balance">credit: {user.cash}</p>
							<p className="Credit">cash: {user.credit}</p>
							<hr />
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