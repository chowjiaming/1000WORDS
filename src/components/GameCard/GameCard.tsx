import { useContext } from 'react';
import GameContext from '../../context/GameContext';
import { GameContextType } from '../../@types/game';
import OnBoard from '../OnBoard/OnBoard';
import './GameCard.css';

const GameCard: React.FC = () => {
  const { gameData } = useContext(GameContext) as GameContextType;
  const { language } = gameData;
  return (
    <section className="gamecard">{!language ? <OnBoard /> : null}</section>
  );
};

export default GameCard;
