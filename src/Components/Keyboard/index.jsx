import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

export const Keyboard = () => {
  const dispatch = useDispatch();
  const { ally, enemy } = useSelector((state) => state);
  const [cooldown_1, setCoolDown_1] = useState(4);
  const [cooldown_2, setCoolDown_2] = useState(3);
  const [cooldown_3, setCoolDown_3] = useState(4);
  const coolDown = [0, cooldown_1, cooldown_2, cooldown_3];
  const [cooldownEnemy_1, setCooldownEnemy_1] = useState(3);
  const [cooldownEnemy_2, setCooldownEnemy_2] = useState(2);

  const logicEnemy = () => {
    do {
      let num = Math.floor(Math.random() * (2 + 1));

      // Удар когтистой лапой.
      if (num == 0) {
        dispatch({
          payload: num,
          type: "ENEMY_RANDOM_NUMBER",
        });
        break;
      }

      // Огненное дыхание.
      if (num == 1 && cooldownEnemy_1 == 3) {
        dispatch({
          payload: num,
          type: "ENEMY_RANDOM_NUMBER",
        });
        break;
      }

      // Удар хвостом.
      if (num == 2 && cooldownEnemy_2 == 2) {
        dispatch({
          payload: num,
          type: "ENEMY_RANDOM_NUMBER",
        });
        break;
      }
      continue;
    } while (false);

    // Огненное дыхание.
    if (enemy.randomNumber == 1 && cooldownEnemy_1 == 3) {
      setCooldownEnemy_1(cooldownEnemy_1 - 3);
    } else if (cooldownEnemy_1 < 3) {
      setCooldownEnemy_1(cooldownEnemy_1 + 1);
    }

    // Удар хвостом.
    if (enemy.randomNumber == 2 && cooldownEnemy_2 == 2) {
      setCooldownEnemy_2(cooldownEnemy_2 - 2);
    } else if (cooldownEnemy_2 < 2) {
      setCooldownEnemy_2(cooldownEnemy_2 + 1);
    }
  };

  const choiceFight = (index) => {
    logicEnemy();

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

    logic(index);
  };

  const logic = (index) => {
    // Вертушка левой пяткой.
    if (index == 1 && cooldown_1 == 4) {
      setCoolDown_1(cooldown_1 - 4);
    } else if (cooldown_1 < 4) {
      setCoolDown_1(cooldown_1 + 1);
    }

    // Каноничный фаербол.
    if (index == 2 && cooldown_2 == 3) {
      setCoolDown_2(cooldown_2 - 3);
    } else if (cooldown_2 < 3) {
      setCoolDown_2(cooldown_2 + 1);
    }

    // Магический блок.
    if (index == 3 && cooldown_3 == 4) {
      setCoolDown_3(cooldown_3 - 4);
    } else if (cooldown_3 < 4) {
      setCoolDown_3(cooldown_3 + 1);
    }
  };

  useEffect(() => {
    logicEnemy();
  }, []);

  return (
    <div className="keyboard">
      {ally.moves.map((obj, index) => {
        return (
          <button
            key={index}
            disabled={coolDown[index] !== obj.cooldown}
            onClick={() => choiceFight(index)}
            className="keyboard__button">
            {obj.name}
          </button>
        );
      })}
    </div>
  );
};
