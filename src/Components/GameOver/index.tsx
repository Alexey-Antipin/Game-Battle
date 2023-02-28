import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../Redux/Store";
import { Context } from "../Context";
import "./index.scss";

export const GameOver = () => {
  const [winer, setWiner] = useState<string>();
  const ally = useSelector((state:IRootState) => state.ally);
  const context = useContext(Context);
  const dispatch = useDispatch();
  
  const winPlayer = () => {
    if (ally.maxHealth <= 0) {
      setWiner("Вы проиграли!");
    } else {
      setWiner("Вы победили!");
    }
  };

  useEffect(() => {
    winPlayer();
  }, []);

  const gameAgain = () => {
    dispatch({
      payload: 10,
      type: "HERO_LIVE",
    });
    dispatch({
      payload: 10,
      type: "ENEMY_LIVE",
    });
    context.setCoolDown_1(4);
    context.setCoolDown_2(3);
    context.setCoolDown_3(4);
    context.setCooldownEnemy_1(3);
    context.setCooldownEnemy_2(2);
  };

  return (
    <div className="gameover">
      <div className="gameover__block">
        <div className="gameover__text">{winer}</div>
        <button
          className="gameover__button"
          onClick={() => gameAgain()}>
          Играть снова
        </button>
      </div>
    </div>
  );
};
