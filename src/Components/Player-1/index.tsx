import { IRootState } from "../../Redux/Store";
import { useSelector } from "react-redux";
import imageAlly from "/mag.png";
import "./index.scss";

export const PlayerAlly = () => {
  const ally = useSelector((state:IRootState) => state.ally);

  return (
    <div className="player">
      <div className="player__name">{ally.name}</div>
      <div className="player__ally">
        <img
          src={imageAlly}
          alt={"img"}
          style={{ height: "97%", width: "100%" }}
        />
      </div>
      
      <div className="player__block">
        <div className="player__text">Здоровье:</div>
        <div className="player__health">{ally.maxHealth}</div>
      </div>
    </div>
  );
};
