import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import atom from '../../Assets/Images/atom.png';
import atomMobile from '../../Assets/Images/atom-mobile.png';
const Header = () => {
    return (
            <Link className="header" to='/'>
                <div className="header-logo">
                <picture>
                    <source srcset={atomMobile} media="(min-width: 1000px)" />
                    <img src={atom} alt=""/>
                </picture>    
                </div>
                <h2>To Main Page</h2>
            </Link>
    )
}
export default Header;