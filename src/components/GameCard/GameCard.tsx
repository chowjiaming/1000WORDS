import { useContext } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import GameContext from '../../context/GameContext';
import { GameContextType } from '../../@types/game';
import OnBoard from '../OnBoard/OnBoard';
import Game from '../Game/Game';
import './GameCard.css';

const GameCard: React.FC = () => {
  const { gameData, setGameSequence } = useContext(
    GameContext,
  ) as GameContextType;
  const { language } = gameData;
  useEffectOnce(() => {
    setGameSequence();
  });
  return (
    <section className="gamecard">{!language ? <OnBoard /> : <Game />}</section>
  );
};

export default GameCard;
