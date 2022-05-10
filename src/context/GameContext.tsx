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
    roundWon: false,
    wordToTranslate: {},
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
    setGameData({
      ...gameData,
      gameRound: gameData.gameRound + 1,
      guessedWords: [],
      roundWon: false,
    });
  };

  const setGameRound = (sequence: number, numOptions: number): void => {
    const wordToTranslate = words[sequence.toString() as keyof typeof words];
    const optionsArray: number[] = generateRandomArray(
      numOptions,
      1000,
      gameData.gameSequence[gameData.gameRound - 1],
    );
    const flashcardOptions: string[] = optionsArray.map((option) => {
      const wordObj = words[option.toString() as keyof typeof words];
      return wordObj['english' as keyof typeof wordObj];
    });
    setGameData({ ...gameData, wordToTranslate, flashcardOptions });
  };

  const handleFlashcardGuess = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    if (!gameData.roundWon) {
      if (!gameData.guessedWords.includes(e.currentTarget.value)) {
        setGameData({
          ...gameData,
          guessedWords: [...gameData.guessedWords, e.currentTarget.value],
        });
      }
      if (
        gameData.wordToTranslate[
          'english' as keyof typeof gameData.wordToTranslate
        ] === e.currentTarget.value
      ) {
        setGameData({
          ...gameData,
          guessedWords: [...gameData.guessedWords, e.currentTarget.value],
          roundWon: true,
        });
      }
    }
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
        handleFlashcardGuess,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
