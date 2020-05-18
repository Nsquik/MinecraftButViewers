import { LAST_ORDERS_GLOBAL } from "../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case LAST_ORDERS_GLOBAL:
      return payload;
    default:
      return state;
  }
};
