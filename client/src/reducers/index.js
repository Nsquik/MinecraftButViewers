import { combineReducers } from "redux";
import authReducer from "./authReducer";
import mcServerReducer from "./mcServerReducer";
import lastOrders from "./lastOrdersReducer";
import userOrdersReducer from "./userOrdersReducer";

export default combineReducers({
  auth: authReducer,
  serverStatus: mcServerReducer,
  lastOrders: lastOrders,
  userOrders: userOrdersReducer,
});
