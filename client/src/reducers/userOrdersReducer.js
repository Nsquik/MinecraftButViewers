import { FETCH_USER_ORDERS } from "../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_USER_ORDERS:
      return payload;
    default:
      return state;
  }
};
