import { useContext } from 'react';
import GameContext from '../../context/GameContext';
import { GameContextType } from '../../@types/game';
import { supportedLanguages } from '../../config/languagesConfig';
import Button from '../Shared/Button/Button';
import './OnBoard.css';

const OnBoard: React.FC = () => {
  const { handleLanguageSelect } = useContext(GameContext) as GameContextType;
  return (
    <div className="onboard">
      <h1 className="onboard__heading">Choose your language</h1>
      <div className="onboard__buttons">
        {supportedLanguages.map((supportedLanguage): React.ReactNode => {
          return (
            <Button
              key={supportedLanguage}
              handleClick={handleLanguageSelect}
              classnames={'button--primary onboard__button'}
              type={'button'}
              value={supportedLanguage}
            >
              {supportedLanguage}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default OnBoard;
