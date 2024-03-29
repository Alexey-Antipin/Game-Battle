import { Action, InitialState } from "../../ts";

const initialState: InitialState = {
  name: "Евстафий ",
  maxHealth: 10,
  moves: [
    {
      name: "Удар боевым кадилом",
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 50,
      cooldown: 0,
    },
    {
      name: "Вертушка левой пяткой",
      physicalDmg: 4,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 4,
    },
    {
      name: "Каноничный фаербол",
      physicalDmg: 0,
      magicDmg: 5,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
    },
    {
      name: "Магический блок",
      physicalDmg: 0,
      magicDmg: 0,
      physicArmorPercents: 100,
      magicArmorPercents: 100,
      cooldown: 4,
    },
  ],
};

export const reducerAlly = (state = initialState, action: Action) => {
  switch (action.type) {
    case "HERO_LIVE_PHYSICAL":
      return {
        ...state,
        maxHealth: state.maxHealth - action.payload,
      };
    case "HERO_LIVE_MAGIC":
      return {
        ...state,
        maxHealth: state.maxHealth - action.payload,
      };
    case "HERO_LIVE":
      return {
        ...state,
        maxHealth: action.payload,
      };

    default:
      return state;
  }
};
