import "./index.scss";
import imageEnemy from "../../Images/scary-monster.png";
import { useSelector } from "react-redux";

export const PlayerEnemy = () => {
  const enemy = useSelector((state) => state.enemy);

  return (
    <div className="player-2">
      <div className="player__name">{enemy.name}</div>
      <div className="player__enemy">
        <img
          src={imageEnemy}
          alt={"img"}
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
