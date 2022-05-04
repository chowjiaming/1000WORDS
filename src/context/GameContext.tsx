import { createContext, useState } from 'react';
import { IGameData, GameContextType } from '../@types/game';
import {
  populateAndShuffleArray,
  generateRandomArray,
} from '../helpers/helperFunctions';
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
    completedWords: [],
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

  const setNextRound = (): void => {
    setGameData({ ...gameData, gameRound: gameData.gameRound + 1 });
  };

  const setGameRound = (sequence: number, numOptions: number): void => {
    const wordObj = words[sequence.toString() as keyof typeof words];
    const wordToTranslate = wordObj[gameData.language as keyof typeof wordObj];
    const optionsArray = generateRandomArray(
      numOptions,
      1000,
      gameData.gameSequence[gameData.gameRound - 1],
    );
    const flashcardOptions = optionsArray.map((option) => {
      const wordObj = words[option.toString() as keyof typeof words];
      return wordObj['english' as keyof typeof wordObj];
    });
    setGameData({ ...gameData, wordToTranslate, flashcardOptions });
  };

  return (
    <GameContext.Provider
      value={{
        gameData,
        setGameData,
        handleLanguageSelect,
        setGameSequence,
        setNextRound,
        setGameRound,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
