import styles from './GameItem.module.css';

const GameItem = ({ game }) => {
    return (
        <div className={ styles.gameItem }>
            <div className={ styles.gameItem__details }>
                <span className={ styles.gameItem__title }>{ game.title }</span>
                <div className={ styles.gameItem__genre }>
                    { game.genres.map(genre => genre) }
                </div>
                <div className={ styles.gameItem__buy }>Buy</div>
            </div>
        </div>
    );
};

export default GameItem;