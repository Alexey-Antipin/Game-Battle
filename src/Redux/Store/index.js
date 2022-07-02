import { combineReducers, createStore } from "redux";
import { reducerAlly } from "../ReducerAlly";
import { reducerEnemy } from "../ReducerEnemy";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  enemy: reducerEnemy,
  ally: reducerAlly,
});
export const store = createStore(rootReducer, composeWithDevTools());
