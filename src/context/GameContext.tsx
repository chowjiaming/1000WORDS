import { createContext, useState } from 'react';
import { IGameData, GameContextType } from '../@types/game';
import { populateAndShuffleArray } from '../helpers/helperFunctions';
import words from '../data/words.json';

type GameContextProviderProps = {
  children: React.ReactNode;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: GameContextProviderProps) => {
  const [gameData, setGameData] = useState<IGameData>({
    language: '',
    gameSequence: [],
    gameRound: 1,
    wordToTranslate: '',
    flashcardOptions: [],
    guessedWords: [],
    score: 0,
  });

  const handleLanguageSelect = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    setGameData({ ...gameData, language: e.currentTarget.value });
  };

  const setGameSequence = (): void => {
    const randomGameSequence: number[] = populateAndShuffleArray(1000);
    setGameData({ ...gameData, gameSequence: [...randomGameSequence] });
  };

  const setGameRound = (): void => {
    setGameData({ ...gameData, gameRound: gameData.gameRound + 1 });
  };

  const setWordToTranslate = (sequence: number): void => {
    const wordObj = words[sequence.toString() as keyof typeof words];
    const wordToTranslate = wordObj[gameData.language as keyof typeof wordObj];
    setGameData({ ...gameData, wordToTranslate });
  };

  return (
    <GameContext.Provider
      value={{
        gameData,
        setGameData,
        handleLanguageSelect,
        setGameSequence,
        setGameRound,
        setWordToTranslate,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
