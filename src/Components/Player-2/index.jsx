import "./index.scss";
import imageEnemy from "../../Images/scary-monster.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const PlayerEnemy = () => {
  const dispatch = useDispatch();
  const enemy = useSelector((state) => state.enemy);

  useEffect(() => {
    randomNumber();
  }, []);

  const randomNumber = () => {
    const response = Math.floor(Math.random() * (2 + 1));
    dispatch({
      payload: response,
      type: "ENEMY_RANDOM_NUMBER",
    });
  };

  return (
    <div className="player-2">
      <div className="player__name">{enemy.name}</div>
      <div className="player__enemy">
        <img
          src={imageEnemy}
          style={{ height: "97%", width: "100%" }}
        />
      </div>
      <div className="player__block">
        <div className="player__text">Здоровье:</div>
        <div className="player__health">{enemy.maxHealth}</div>
      </div>
    </div>
  );
};
