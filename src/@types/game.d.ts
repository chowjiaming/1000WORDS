export interface IGameData {
  language: string;
  gameSequence: number[];
  gameRound: number;
  roundWon: boolean;
  wordToTranslate: object;
  flashcardOptions: string[];
  guessedWords: string[];
  completedWords: number[];
  score: number;
}

export type GameContextType = {
  gameData: IGameData;
  setGameData: React.Dispatch<React.SetStateAction<IGameData>>;
  handleLanguageSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setGameSequence: () => void;
  setNextRound: () => void;
  setGameRound: (sequence: number, numOptions: number) => void;
  handleFlashcardGuess: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
