import { useSelector } from "react-redux";
import { GameOver } from "../Components/GameOver";
import { Keyboard } from "../Components/Keyboard";
import { PlayerAlly } from "../Components/Player-1";
import { PlayerEnemy } from "../Components/Player-2";
import { Talk } from "../Components/Talk";
import "./index.scss";

export const App = () => {
  const { ally, enemy } = useSelector((state) => state);

  return (
    <div className="app">
      <div className="app__battle">
        <PlayerAlly />
        <Talk />
        <PlayerEnemy />
        {ally.maxHealth <= 0 || enemy.maxHealth <= 0 ? (
          <GameOver />
        ) : (
          <></>
        )}
      </div>
      <div className="app__keyboard">
        <Keyboard />
      </div>
    </div>
  );
};
