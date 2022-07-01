import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

export const Keyboard = () => {
  const dispatch = useDispatch();
  const { ally, enemy } = useSelector((state) => state);
  const [cooldown_1, setCoolDown_1] = useState(4);
  const [cooldown_2, setCoolDown_2] = useState(3);
  const [cooldown_3, setCoolDown_3] = useState(4);

  const choiceFight = (event) => {
    // Получаем id.
    const index = event.currentTarget.id;

    // Нам наносят удар первым.
    let defenseHero = ally.moves[index].physicArmorPercents;
    let fightEnemy = enemy.moves[enemy.randomNumber].physicalDmg;
    let defenseHeroMagic = ally.moves[index].magicArmorPercents;
    let fightEnemyMagic = enemy.moves[enemy.randomNumber].magicDmg;

    if (defenseHero - fightEnemy < 0) {
      dispatch({
        payload: enemy.moves[enemy.randomNumber].physicalDmg,
        type: "HERO_LIVE_PHYSICAL",
      });
    } else if (defenseHeroMagic - fightEnemyMagic < 0) {
      dispatch({
        payload: enemy.moves[enemy.randomNumber].magicDmg,
        type: "HERO_LIVE_MAGIC",
      });
    }

    // Мы наносим удар.
    let defenseEnemy =
      enemy.moves[enemy.randomNumber].physicArmorPercents;
    let fightHero = ally.moves[index].physicalDmg;
    let defenseEnemyMagic =
      enemy.moves[enemy.randomNumber].magicArmorPercents;
    let fightHeroMagic = ally.moves[index].magicDmg;

    if (defenseEnemy - fightHero < 0) {
      dispatch({
        payload: ally.moves[index].physicalDmg,
        type: "ENEMY_LIVE_PHYSICAL",
      });
    } else if (defenseEnemyMagic - fightHeroMagic < 0) {
      dispatch({
        payload: ally.moves[index].magicDmg,
        type: "ENEMY_LIVE_MAGIC",
      });
    }

    const response = Math.floor(Math.random() * (2 + 1));
    dispatch({
      payload: response,
      type: "ENEMY_RANDOM_NUMBER",
    });
    logic(index);
  };

  const logic = (index) => {
    // id-1
    if (index == 1 && cooldown_1 == 4) {
      setCoolDown_1(cooldown_1 - 4);
      console.log("1", cooldown_1);
    } else if (index && cooldown_1 < 4) {
      setCoolDown_1(cooldown_1 + 1);
      console.log("1", cooldown_1);
    }

    // id-2
    if (index == 2 && cooldown_2 == 3) {
      setCoolDown_2(cooldown_2 - 3);
      console.log("2", cooldown_2);
    } else if (index && cooldown_2 < 3) {
      setCoolDown_2(cooldown_2 + 1);
      console.log("2", cooldown_2);
    }

    // id-3
    if (index == 3 && cooldown_3 == 4) {
      setCoolDown_3(cooldown_3 - 4);
      console.log("3", cooldown_3);
    } else if (index && cooldown_3 < 4) {
      setCoolDown_3(cooldown_3 + 1);
      console.log("3", cooldown_3);
    }
  };

  return (
    <div className="keyboard">
      <button
        id="0"
        onClick={(event) => choiceFight(event)}
        className="keyboard__button">
        {ally.moves[0].name}
      </button>
      <button
        id="1"
        disabled={cooldown_1 !== 4}
        onClick={(event) => choiceFight(event)}
        className="keyboard__button">
        {ally.moves[1].name}
      </button>
      <button
        id="2"
        disabled={cooldown_2 !== 3}
        onClick={(event) => choiceFight(event)}
        className="keyboard__button">
        {ally.moves[2].name}
      </button>
      <button
        id="3"
        disabled={cooldown_3 !== 4}
        onClick={(event) => choiceFight(event)}
        className="keyboard__button">
        {ally.moves[3].name}
      </button>
    </div>
  );
};
