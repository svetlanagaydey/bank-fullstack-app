import myApi from '../../../api/Api';
import { useEffect, useState } from "react";
import Header from '../../Header/Header'

const StartPage = () => {
	const [data, setData] = useState([]);
	// const [isAddUser, setIsAddUser] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		getReq()
	}, [isClicked]);
	//console.log(process.env.NODE_ENV);

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
		<div >
            <Header />
            <h1>Wellcome to my bank application!</h1>
			{' '}
			<h1>Bank Application</h1>
			<button onClick={() => setIsClicked(true)}>Get all users</button>
			{isClicked && print()}
		</div>
	);  
}

export default StartPage;