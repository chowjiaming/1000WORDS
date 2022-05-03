export interface IGameData {
  language: string;
  gameSequence: number[];
  wordToTranslate: string;
  flashcardOptions: string[];
  guessedWords: string[];
  score: number;
}

export type GameContextType = {
  gameData: IGameData;
  setGameData: React.Dispatch<React.SetStateAction<IGameData>>;
};
