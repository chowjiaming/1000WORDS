import { GameProvider } from '../../../context/GameContext';
import GameCard from '../../GameCard/GameCard';
import './Main.css';

const Main: React.FC = () => {
  return (
    <main className="main">
      <GameProvider>
        <GameCard />
      </GameProvider>
    </main>
  );
};

export default Main;
