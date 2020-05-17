import { combineReducers } from "redux";
import authReducer from "./authReducer";
import mcServerReducer from "./mcServerReducer";

export default combineReducers({
  auth: authReducer,
  serverStatus: mcServerReducer,
});
