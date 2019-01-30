import React from 'react';
import './NavBar.scss';
import logo from '../../logo.png'

export default function NavBar() {
	return (
		<nav className='navbar'>
			<img src={logo} alt='city tours logo '/>
			<ul className='navbar-links'>
				<li>
					<a href='/' className='navbar-link'> 
						home
					</a>
				</li>
				<li>
					<a href='/' className='navbar-link'> 
						about
					</a>
				</li>
				<li>
					<a href='/' className='navbar-link active'> 
						tours
					</a>
				</li>
			</ul>
		</nav>
		)

};