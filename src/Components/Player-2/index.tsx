import { IRootState } from "../../Redux/Store";
import imageEnemy from "/scary-monster.png";
import { useSelector } from "react-redux";
import "./index.scss";

export const PlayerEnemy = () => {
  const enemy = useSelector((state:IRootState) => state.enemy);

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
