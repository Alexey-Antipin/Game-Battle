import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../Redux/Store";
import { useEffect, useContext } from "react";
import { Context } from "../Context";
import "./index.scss";

export const Keyboard = () => {
  const dispatch = useDispatch();
  const { ally, enemy } = useSelector((state: IRootState) => state);
  const context = useContext(Context);
  const coolDown = [
    0,
    context.cooldown_1,
    context.cooldown_2,
    context.cooldown_3,
  ];

  const logicEnemy = () => {
    do {
      let num = Math.floor(Math.random() * (2 + 1));

      // Удар когтистой лапой.
      if (num === 0) {
        dispatch({
          payload: num,
          type: "ENEMY_RANDOM_NUMBER",
        });
        break;
      }

      // Огненное дыхание.
      if (
        num === 1 &&
        context.cooldownEnemy_1 === 3 &&
        enemy.randomNumber !== num
      ) {
        dispatch({
          payload: num,
          type: "ENEMY_RANDOM_NUMBER",
        });
        break;
      }

      // Удар хвостом.
      if (
        num === 2 &&
        context.cooldownEnemy_2 === 2 &&
        enemy.randomNumber !== num
      ) {
        dispatch({
          payload: num,
          type: "ENEMY_RANDOM_NUMBER",
        });
        break;
      }
      continue;
    } while (true);

    // Огненное дыхание.
    if (enemy.randomNumber === 1 && context.cooldownEnemy_1 === 3) {
      context.setCooldownEnemy_1(context.cooldownEnemy_1 - 3);
    } else if (context.cooldownEnemy_1 < 3) {
      context.setCooldownEnemy_1(context.cooldownEnemy_1 + 1);
    }

    // Удар хвостом.
    if (enemy.randomNumber === 2 && context.cooldownEnemy_2 === 2) {
      context.setCooldownEnemy_2(context.cooldownEnemy_2 - 2);
    } else if (context.cooldownEnemy_2 < 2) {
      context.setCooldownEnemy_2(context.cooldownEnemy_2 + 1);
    }
  };

  const choiceFight = (index: number) => {
    logicEnemy();

    // Нам наносят удар первым.
    let defenseHero = ally.moves[index]!.physicArmorPercents;
    let fightEnemy = enemy.moves[enemy.randomNumber as number]!.physicalDmg;
    let defenseHeroMagic = ally.moves[index]!.magicArmorPercents;
    let fightEnemyMagic = enemy.moves[enemy.randomNumber as number]!.magicDmg;

    if (defenseHero - fightEnemy < 0) {
      dispatch({
        payload: enemy.moves[enemy.randomNumber as number]!.physicalDmg,
        type: "HERO_LIVE_PHYSICAL",
      });
    } else if (defenseHeroMagic - fightEnemyMagic < 0) {
      dispatch({
        payload: enemy.moves[enemy.randomNumber as number]!.magicDmg,
        type: "HERO_LIVE_MAGIC",
      });
    }

    // Мы наносим удар.
    let defenseEnemy =
      enemy.moves[enemy.randomNumber as number]!.physicArmorPercents;
    let fightHero = ally.moves[index]!.physicalDmg;
    let defenseEnemyMagic =
      enemy.moves[enemy.randomNumber as number]!.magicArmorPercents;
    let fightHeroMagic = ally.moves[index]!.magicDmg;

    if (defenseEnemy - fightHero < 0) {
      dispatch({
        payload: ally.moves[index]!.physicalDmg,
        type: "ENEMY_LIVE_PHYSICAL",
      });
    } else if (defenseEnemyMagic - fightHeroMagic < 0) {
      dispatch({
        payload: ally.moves[index]!.magicDmg,
        type: "ENEMY_LIVE_MAGIC",
      });
    }

    logic(index);
  };

  const logic = (index: number) => {
    // Вертушка левой пяткой.
    if (index === 1 && context.cooldown_1 === 4) {
      context.setCoolDown_1(context.cooldown_1 - 4);
    } else if (context.cooldown_1 < 4) {
      context.setCoolDown_1(context.cooldown_1 + 1);
    }

    // Каноничный фаербол.
    if (index === 2 && context.cooldown_2 === 3) {
      context.setCoolDown_2(context.cooldown_2 - 3);
    } else if (context.cooldown_2 < 3) {
      context.setCoolDown_2(context.cooldown_2 + 1);
    }

    // Магический блок.
    if (index === 3 && context.cooldown_3 === 4) {
      context.setCoolDown_3(context.cooldown_3 - 4);
    } else if (context.cooldown_3 < 4) {
      context.setCoolDown_3(context.cooldown_3 + 1);
    }
  };

  useEffect(() => {
    logicEnemy();
  }, []);

  return (
    <div className="keyboard">
      {ally.moves.map((obj, index: number) => {
        return (
          <button
            key={index}
            disabled={coolDown[index] !== obj!.cooldown }
            onClick={() => choiceFight(index)}
            className="keyboard__button">
            {obj!.name}
          </button>
        );
      })}
    </div>
  );
};
