export interface IGameData {
  language: string;
  gameSequence: number[];
  gameRound: number;
  wordToTranslate: string;
  flashcardOptions: string[];
  guessedWords: string[];
  score: number;
}

export type GameContextType = {
  gameData: IGameData;
  setGameData: React.Dispatch<React.SetStateAction<IGameData>>;
  handleLanguageSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setGameSequence: () => void;
  setGameRound: () => void;
  setWordToTranslate: (sequence: number) => void;
};
