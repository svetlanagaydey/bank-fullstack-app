import {Link} from 'react-router-dom';

const Options = (props) => {
const currentUser = props.currentUser;
	const setUserToLocal = () => {
		
		localStorage.setItem('userToDelete', JSON.stringify(currentUser));
		console.log(currentUser);
	}

	return (
		<ul className="options-list">
			<li className="userOption deposit"
			onClick={ () => setUserToLocal()}>
				<Link to="/deposit">
					<span className="icon depositIcon"></span>
					Deposit
				</Link>
			</li>
			
			<li className="userOption withdraw" 
			onClick={ () => setUserToLocal()}>
				<Link to="/withdraw" state={{ currentUser: {currentUser} }}>
					<span className="icon withdrawIcon"></span>
					Withdraw
				</Link>
			</li>
			<li className="userOption updateName">
				<Link to="/update" state={{ client: currentUser }} >
					<span className="icon updateNameIcon"></span>
					Update
				</Link>
			</li>
			<li className="userOption delete"
			onClick={ () => setUserToLocal()}>
				<Link to="/delete">
					<span className="icon deleteIcon"> </span>
					Delete
				</Link>
			</li>
		</ul>
	)
}
export default Options;