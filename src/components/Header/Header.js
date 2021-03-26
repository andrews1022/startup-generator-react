import React from 'react';
import './Header.scss';

const Header = () => (
	<header className='header' data-test='component-header'>
		<h1 className='header__title'>Startup Generator</h1>
		<p className='header__tagline'>
			Got developers block? Use this app to generate a random startup, and then get building!
		</p>
	</header>
);

export default Header;
