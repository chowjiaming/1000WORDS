import { useContext, useEffect } from 'react';
import GameContext from '../../context/GameContext';
import { GameContextType } from '../../@types/game';
import './Game.css';

const Game: React.FC = () => {
  const { gameData, setGameRound } = useContext(GameContext) as GameContextType;
  const { wordToTranslate, flashcardOptions } = gameData;
  console.log(gameData.flashcardOptions);

  useEffect(() => {
    setGameRound(gameData.gameSequence[gameData.gameRound - 1], 8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData.gameRound]);

  return (
    <div className="game">
      <h1 className="game__word">{wordToTranslate}</h1>
      {flashcardOptions}
    </div>
  );
};

export default Game;
