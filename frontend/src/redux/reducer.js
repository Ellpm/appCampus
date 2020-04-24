import { ONE_THING } from "./action-types";

const initialUserState = {
  state1: "one",
};

export const reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ONE_THING:
      return {
        ...state,
        state1: action.oneFunction,
      };
    default:
      return state;
  }
};
