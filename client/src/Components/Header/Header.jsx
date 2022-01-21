import React from 'react';
import './header.css';
import atom from '../../Assets/Images/atom.png';
const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={atom} alt=""/>
            </div>
            <h2>To Main Page</h2>
        </div>
    )
}
export default Header;