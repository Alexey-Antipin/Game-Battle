import { useSelector } from "react-redux";
import "./index.scss";

export const Talk = () => {
  const enemy = useSelector((state) => state.enemy);

  return (
    <div className="talk">
      <div className="talk__name">{enemy.name}</div>
      <div className="talk__name-fight">{enemy.moves[1].name}</div>
    </div>
  );
};
