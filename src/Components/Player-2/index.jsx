import "./index.scss";
import imageEnemy from "../../Images/scary-monster.png";

export const PlayerEnemy = () => {
  return (
    <div className="player__enemy">
      <img
        src={imageEnemy}
        style={{ height: "97%", width: "100%" }}
      />
    </div>
  );
};
