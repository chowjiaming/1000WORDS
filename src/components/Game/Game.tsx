import { useContext, useEffect } from 'react';
import GameContext from '../../context/GameContext';
import { GameContextType } from '../../@types/game';
import './Game.css';

const Game: React.FC = () => {
  const { gameData, setWordToTranslate } = useContext(
    GameContext,
  ) as GameContextType;

  console.log(gameData.gameSequence[gameData.gameRound - 1]);

  useEffect(() => {
    setWordToTranslate(gameData.gameSequence[gameData.gameRound - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData.gameRound]);

  return (
    <div className="game">
      <h1 className="game__word">{gameData.wordToTranslate}</h1>
    </div>
  );
};

export default Game;
