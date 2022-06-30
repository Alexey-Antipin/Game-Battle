import "./index.scss";
import imageAlly from "../../Images/mag.png";

export const PlayerAlly = () => {
  return (
    <div className="player__ally">
      <img
        src={imageAlly}
        style={{ height: "97%", width: "100%" }}
      />
    </div>
  );
};
