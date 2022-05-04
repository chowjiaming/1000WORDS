import { useContext, useEffect } from 'react';
import GameContext from '../../context/GameContext';
import { GameContextType } from '../../@types/game';
import Button from '../Shared/Button/Button';
import './Game.css';

const Game: React.FC = () => {
  const { gameData, setGameRound } = useContext(GameContext) as GameContextType;
  const { wordToTranslate, flashcardOptions, gameRound, score } = gameData;
  console.log(flashcardOptions);

  useEffect(() => {
    setGameRound(gameData.gameSequence[gameData.gameRound - 1], 6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData.gameRound]);

  const flashcardButtons: JSX.Element[] = flashcardOptions.map(
    (flashcardOption) => {
      return (
        <Button
          key={flashcardOption}
          handleClick={() => console.log(flashcardOption)}
          classnames={'button--primary onboard__button'}
          type={'button'}
          value={flashcardOption}
        >
          {flashcardOption}
        </Button>
      );
    },
  );

  return (
    <div className="game">
      <div className="game__interface">
        <h1 className="game__word">{wordToTranslate}</h1>
        <p className="game__score">{`Score: ${score}`}</p>
        <p className="game__round">{`Round: ${gameRound}`}</p>
      </div>
      <div className="game__flashcards game__flashcards--easy">
        {flashcardButtons}
      </div>
    </div>
  );
};

export default Game;
