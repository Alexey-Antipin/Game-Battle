import { useState } from "react";
import { useSelector } from "react-redux";
import { Context } from "../Components/Context";
import { GameOver } from "../Components/GameOver";
import { Keyboard } from "../Components/Keyboard";
import { PlayerAlly } from "../Components/Player-1";
import { PlayerEnemy } from "../Components/Player-2";
import { Talk } from "../Components/Talk";
import "./index.scss";

export const App = () => {
  const { ally, enemy } = useSelector((state) => state);
  const [cooldown_1, setCoolDown_1] = useState(4);
  const [cooldown_2, setCoolDown_2] = useState(3);
  const [cooldown_3, setCoolDown_3] = useState(4);
  const [cooldownEnemy_1, setCooldownEnemy_1] = useState(3);
  const [cooldownEnemy_2, setCooldownEnemy_2] = useState(2);

  return (
    <Context.Provider
      value={{
        cooldown_1,
        setCoolDown_1,
        cooldown_2,
        setCoolDown_2,
        cooldown_3,
        setCoolDown_3,
        cooldownEnemy_1,
        setCooldownEnemy_1,
        cooldownEnemy_2,
        setCooldownEnemy_2,
      }}>
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
    </Context.Provider>
  );
};
