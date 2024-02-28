import * as types from "./types";

const initialState = { type: null, message: "", timer: null };

const AlertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_ALERT:
      return { type: payload?.type, message: payload?.message, timer: null };

    case types.CLEAR_ALERT:
      return { type: null, message: "", timer: null };

    case types.ALERT_TIMER:
      return { ...state, timer: true }

    default:
      return state;
  }
};

export default AlertReducer;
