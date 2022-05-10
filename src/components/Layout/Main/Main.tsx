// import { useContext } from 'react';
// import GameContext from '../../../context/GameContext';
// import { GameContextType } from '../../../@types/game';
import GameCard from '../../GameCard/GameCard';
// import Button from '../../Shared/Button/Button';
import './Main.css';

const Main: React.FC = () => {
  // const { gameData, setNextRound } = useContext(GameContext) as GameContextType;
  return (
    <main className="main">
      {/* {gameData.roundComplete ? (
        <Button
          key={'Next Round'}
          handleClick={setNextRound}
          classnames={`button--success button__next`}
          type={'button'}
          value={'Next Round'}
        >
          Next Round
        </Button>
      ) : null} */}
      <GameCard />
    </main>
  );
};

export default Main;
