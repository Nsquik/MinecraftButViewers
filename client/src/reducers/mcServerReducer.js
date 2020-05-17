import { CHECK_SERVER_STATUS } from "../actions/types";

export default (state = null, { type, payload }) => {
  switch (type) {
    case CHECK_SERVER_STATUS:
      return payload;
    default:
      return state;
  }
};
