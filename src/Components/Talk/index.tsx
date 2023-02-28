import { IRootState } from "../../Redux/Store";
import { useSelector } from "react-redux";
import "./index.scss";

export const Talk = () => {
  const enemy = useSelector((state:IRootState) => state.enemy);

  return (
    <div className="talk">
      <div className="talk__name">Атака</div>
      <div className="talk__name-fight">
        {enemy.moves[enemy.randomNumber as number]!.name}
      </div>
    </div>
  );
};
