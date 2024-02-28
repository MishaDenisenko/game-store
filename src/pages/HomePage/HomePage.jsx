import GameItem from '../../components/GameItem';
import { GAMES } from '../../constants/games';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={ styles.wrapper }>
            { GAMES.map((game, index) => <GameItem key={ index } game={ game }/>) }
        </div>
    );
};

export default HomePage;