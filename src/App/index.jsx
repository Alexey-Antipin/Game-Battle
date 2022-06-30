import { Keyboard } from "../Components/Keyboard";
import { PlayerAlly } from "../Components/Player-1";
import { PlayerEnemy } from "../Components/Player-2";
import { Talk } from "../Components/Talk";
import "./index.scss";

export const App = () => {
  return (
    <div className="app">
      <div className="app__battle">
        <PlayerAlly />
        <Talk />
        <PlayerEnemy />
      </div>
      <div className="app__keyboard">
        <Keyboard />
      </div>
    </div>
  );
};
