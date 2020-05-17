import axios from "axios";
import { CHECK_SERVER_STATUS } from "./types";

export const checkServerStatus = () => async (dispatch) => {
  const status = await axios.get("/api/server_status");
  dispatch({ type: CHECK_SERVER_STATUS, payload: status.data });
};
