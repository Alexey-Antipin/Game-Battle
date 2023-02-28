import { IRootState } from "../Redux/Store";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  PlayerEnemy,
  PlayerAlly,
  GameOver,
  Keyboard,
  Context,
  Talk,
} from "../Components";
import "./index.scss";

export const App = () => {
  const { ally, enemy } = useSelector((state: IRootState) => state);
  const [cooldownEnemy_1, setCooldownEnemy_1] = useState<number>(3);
  const [cooldownEnemy_2, setCooldownEnemy_2] = useState<number>(2);
  const [cooldown_1, setCoolDown_1] = useState<number>(4);
  const [cooldown_2, setCoolDown_2] = useState<number>(3);
  const [cooldown_3, setCoolDown_3] = useState<number>(4);

  return (
    <Context.Provider
      value={{
        setCooldownEnemy_1,
        cooldownEnemy_1,
        setCooldownEnemy_2,
        cooldownEnemy_2,
        setCoolDown_1,
        cooldown_1,
        setCoolDown_2,
        cooldown_2,
        setCoolDown_3,
        cooldown_3,
      }}>
      <div className="app">
        <div className="app__battle">
          <PlayerAlly />
          <Talk />
          <PlayerEnemy />
          {ally.maxHealth <= 0 || enemy.maxHealth <= 0 ? <GameOver /> : <></>}
        </div>

        <div className="app__keyboard">
          <Keyboard />
        </div>
      </div>
    </Context.Provider>
  );
};
