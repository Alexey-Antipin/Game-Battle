import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { reducerEnemy, reducerAlly } from "../";

const rootReducer = combineReducers({
  enemy: reducerEnemy,
  ally: reducerAlly,
});
export const store = createStore(rootReducer, composeWithDevTools());
