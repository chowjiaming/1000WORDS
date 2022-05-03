import { createContext, useState } from 'react';
import { IGameData, GameContextType } from '../@types/game';

type GameContextProviderProps = {
  children: React.ReactNode;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: GameContextProviderProps) => {
  const [gameData, setGameData] = useState<IGameData>({
    language: '',
    gameSequence: [],
    wordToTranslate: '',
    flashcardOptions: [],
    guessedWords: [],
    score: 0,
  });

  return (
    <GameContext.Provider value={{ gameData, setGameData }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
