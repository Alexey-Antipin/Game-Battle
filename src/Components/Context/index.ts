import { createContext } from "react";

type TodoContext = {
  setCooldownEnemy_1: (value: number) => void;
  cooldownEnemy_1: number;
  setCooldownEnemy_2: (value: number) => void;
  cooldownEnemy_2: number;
  setCoolDown_1: (value: number) => void;
  cooldown_1: number;
  setCoolDown_2: (value: number) => void;
  cooldown_2: number;
  setCoolDown_3: (value: number) => void;
  cooldown_3: number;
};

export const Context = createContext<TodoContext>({} as TodoContext);
