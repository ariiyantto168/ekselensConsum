import { combineReducers, createStore } from "redux";
import kategoriReducer from "./Reducers/kategoriReducer";
import kelasReducer from "./Reducers/kelasReducer";
import materiReducer from "./Reducers/materiReducer";

const reducer = combineReducers({
  kategoriReducer,
  kelasReducer,
  materiReducer,
});

const store = createStore(reducer);
export default store;
