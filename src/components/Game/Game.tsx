import { useContext, useEffect } from 'react';
import GameContext from '../../context/GameContext';
import { GameContextType } from '../../@types/game';
import Button from '../Shared/Button/Button';
import './Game.css';

const Game: React.FC = () => {
  const { gameData, setGameRound, handleFlashcardGuess, setNextRound } =
    useContext(GameContext) as GameContextType;
  const { wordToTranslate, flashcardOptions, gameRound, score } = gameData;

  useEffect(() => {
    setGameRound(gameData.gameSequence[gameData.gameRound - 1], 6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData.gameRound]);

  const flashcardButtons: JSX.Element[] = flashcardOptions.map(
    (flashcardOption) => {
      return (
        <Button
          key={flashcardOption}
          handleClick={handleFlashcardGuess}
          classnames={`button--primary onboard__button ${
            gameData.guessedWords.includes(flashcardOption) &&
            flashcardOption !==
              gameData.wordToTranslate[
                'english' as keyof typeof wordToTranslate
              ]
              ? 'button--error'
              : gameData.guessedWords.includes(flashcardOption) &&
                flashcardOption ===
                  gameData.wordToTranslate[
                    'english' as keyof typeof wordToTranslate
                  ]
              ? 'button--success'
              : ''
          }`}
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
        <h1 className="game__word">
          {wordToTranslate[gameData.language as keyof typeof wordToTranslate]}
        </h1>
        <p className="game__score">{`Score: ${score}`}</p>
        <p className="game__round">{`Round: ${gameRound}`}</p>
        {gameData.roundWon ? (
          <Button
            key={'Next Round'}
            handleClick={setNextRound}
            classnames={`button--success button__next`}
            type={'button'}
            value={'Next Round'}
          >
            Next Round
          </Button>
        ) : null}
      </div>
      <div className="game__flashcards game__flashcards--easy">
        {flashcardButtons}
      </div>
    </div>
  );
};

export default Game;
