import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (


        <header className='navbar'>
            <Link className='navbar__item-left' to='/'>HOME</Link>
            <Link className='navbar__item-left:hover' to='/'>STUDENT</Link>

            <Link className='navbar__item-left'>MENTOR</Link>
            <Link className='navbar__item-left'>TEAMS</Link>
            <Link className='navbar__item-right' to='/'>REGISTER</Link>
            <Link className='navbar__item-right' to='/login'>LOGIN</Link>
        </header>

    )
}

export default Navbar
