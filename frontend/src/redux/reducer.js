import { GET_BASE, ADD_STUDENT } from "./action-types";

const initialUserState = {
  data: {}
};

export const reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_BASE:
      return {
        ...state,
        data: action.data,
      };
      case ADD_STUDENT:
        return {
          ...state,
          student: action.student
        }
    default:
      return state;
  }
};
