import { createStore } from "redux";
import appReducer from "../redux/reducer/appreducer";

const store = createStore(appReducer);
export default store;
