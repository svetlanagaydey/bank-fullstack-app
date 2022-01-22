import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import atom from '../../Assets/Images/atom.png';
const Header = () => {
    return (
            <Link className="header" to='/'>
                <div className="header-logo">
                    <img src={atom} alt=""/>
                </div>
                <h2>To Main Page</h2>
            </Link>
    )
}
export default Header;