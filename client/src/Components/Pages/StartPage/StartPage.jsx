import {Link} from 'react-router-dom';
import Header from '../../Header/Header';
import './startPage.css'

const StartPage = () => {

	return (
		<div className="container">
      <Header />
			<main className="main">
        <h1 className="main-header">Wellcome to my bank application!</h1>
        <ul className="options-list">
          <li className="option"> <span className="icon icon1"></span><Link clas="option-text" to="/user" value='user' data-hover="user">Find Client</Link></li>
          <li className="option"> <span className="icon icon2"></span><Link clas="option-text" to="/add" value='add' data-hover="add">Add New Client</Link></li>
          <li className="option"> <span className="icon icon3"></span><Link clas="option-text" to="/transfer"value='transfer' data-hover="transfer">Transfer</Link></li>
          <li className="option"> <span className="icon icon4"></span><Link clas="option-text" to="/users" value='users' data-hover="users">Get All Clients</Link></li>
        </ul>
			</main> 
		</div>
	);  
}

export default StartPage;