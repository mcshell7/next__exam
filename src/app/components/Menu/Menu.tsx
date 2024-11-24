import React from 'react';
import styles from "./Menu.module.scss";
import Link from "next/link";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <nav>
                <ul className={styles.menu__list}>
                    <li>
                        <Link className={styles.link} href={'/movies'}>Popular movies</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href={'/genres'}>Genres</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;