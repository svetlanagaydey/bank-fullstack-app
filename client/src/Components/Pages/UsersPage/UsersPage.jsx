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
								<p className="firstName"><span className="formSubtitles">First Name: </span>{user.firstName}</p>
								<p className="lastName"><span className="formSubtitles">Last Name: </span>{user.lastName}</p>
								<p className="id"><span className="formSubtitles">id: </span>{user._id}</p>
								<p className="credit"><span className="formSubtitles">credit: </span>{user.cash}</p>
								<p className="cash"><span className="formSubtitles">cash: </span>{user.credit}</p>
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
            <h2 className="users-header">List of all Clients</h2>
				{print()}
        </div>
    )
}

export default UsersPage;