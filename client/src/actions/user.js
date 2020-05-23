import { FETCH_USER, FETCH_USER_ORDERS } from "./types";
import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const user = await axios.get("/api/user/current");
  dispatch({ type: FETCH_USER, payload: user.data });
};

export const fetchUserOrders = () => async (dispatch) => {
  const userOrders = await axios.get("/api/user/orders");
  dispatch({ type: FETCH_USER_ORDERS, payload: userOrders.data });
};
