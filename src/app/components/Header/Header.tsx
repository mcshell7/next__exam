import React from 'react';
import Menu from "@/app/components/Menu/Menu";
import Logo from "@/app/components/Logo/Logo";
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <Logo/>
                    <Menu/>
                </div>
            </div>
        </header>
    );
};

export default Header;