import { combineReducers, createStore } from "redux";
import { reducerAlly } from "../ReducerAlly";
import { reducerEnemy } from "../ReducerEnemy";

const rootReducer = combineReducers({
  enemy: reducerEnemy,
  ally: reducerAlly,
});
export const store = createStore(rootReducer);
