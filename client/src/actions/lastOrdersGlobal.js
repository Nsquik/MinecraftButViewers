import { LAST_ORDERS_GLOBAL } from "./types";
import axios from "axios";

export const fetchLastOrdersGlobal = () => async (dispatch) => {
  const orders = await axios.get("/api/paypal/recent");
  dispatch({ type: LAST_ORDERS_GLOBAL, payload: orders.data });
};
