import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';

const Header = (props) => {
    let links = (
        <Link className='option' to='/signin'>LOGIN/REGISTER</Link>
    );
    if(props.loggedInMember) {
        links = <Link onClick={() => props.logout()} className='option' to='/signin'>LOGOUT</Link>
    }
    return (
        <div className='header'>
            <Link className='container' to='/'>
                Pactivities
            </Link>
            <div className='options'>
                <Link className='option' to='/aboutus'>
                    ABOUT US
                </Link>
                <Link className='option' to='/contactus'>
                    CONTACT US
                </Link>
                {links}
            </div>
        </div>
    )
}

export default Header;