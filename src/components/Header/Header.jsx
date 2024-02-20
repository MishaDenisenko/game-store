import React from 'react';
import {Link} from 'react-router-dom';

import CartBlock from '../CartBlock';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <Link to={'/'} className={styles.header__title}>
                    Game Store
                </Link>
            </div>
            <div className={styles.header__button}>
                <CartBlock price={'222 руб.'}/>
            </div>
        </div>
    );
};

export default Header;