import {BiCartAlt} from 'react-icons/bi';

import styles from './CartBlock.module.css';

const CartBlock = ({price}) => {
    return (
        <div className={styles.cart}>
            <BiCartAlt size={25} className={styles.cart__icon}/>
            <span className={styles.cart__price}>{price}</span>
        </div>
    );
};

export default CartBlock;