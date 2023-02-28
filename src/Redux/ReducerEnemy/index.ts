import { Action, InitialState } from "../../ts";

const initialState: InitialState = {
  name: "Лютый",
  maxHealth: 10,
  moves: [
    {
      name: "Удар когтистой лапой",
      physicalDmg: 3, // физический урон
      magicDmg: 0, // магический урон
      physicArmorPercents: 20, // физическая броня
      magicArmorPercents: 20, // магическая броня
      cooldown: 0, // ходов на восстановление
    },
    {
      name: "Огненное дыхание",
      physicalDmg: 0,
      magicDmg: 4,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
    },
    {
      name: "Удар хвостом",
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 50,
      magicArmorPercents: 0,
      cooldown: 2,
    },
  ],
  randomNumber: 0,
};

export const reducerEnemy = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ENEMY_RANDOM_NUMBER":
      return {
        ...state,
        randomNumber: action.payload,
      };
    case "ENEMY_LIVE_PHYSICAL":
      return {
        ...state,
        maxHealth: state.maxHealth - action.payload,
      };
    case "ENEMY_LIVE_MAGIC":
      return {
        ...state,
        maxHealth: state.maxHealth - action.payload,
      };
    case "ENEMY_LIVE":
      return {
        ...state,
        maxHealth: action.payload,
      };

    default:
      return state;
  }
};
