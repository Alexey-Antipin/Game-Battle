import { useSelector } from "react-redux";
import "./index.scss";

export const Keyboard = () => {
  const ally = useSelector((state) => state.ally);

  return (
    <div className="keyboard">
      {ally.moves.map((obj, index) => {
        return (
          <button className="keyboard__button" key={index}>
            {obj.name}
          </button>
        );
      })}
    </div>
  );
};
