import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

export const GameOver = () => {
  const [winer, setWiner] = useState();
  const dispatch = useDispatch();
  const ally = useSelector((state) => state.ally);

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
