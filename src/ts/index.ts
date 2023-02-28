export type InitialState = {
  name: string;
  maxHealth: number;
  moves: [Moves, Moves, Moves, Moves?];
  randomNumber?: number;
};

type Moves = {
  name: string;
  physicalDmg: number;
  magicDmg: number;
  physicArmorPercents: number;
  magicArmorPercents: number;
  cooldown: number;
};

export type Action = {
  type: string;
  payload: number;
};
