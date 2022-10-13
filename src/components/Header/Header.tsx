import React from 'react';
import Logo from '@/components/Logo/Logo';

import styles from './Header.module.css';

const Header: React.FC = () => (
	<header className={styles.header}>
		<Logo className={styles.logo} />
		<h1 className={styles.title}>Sam Vargas</h1>
	</header>
);

export default Header;
