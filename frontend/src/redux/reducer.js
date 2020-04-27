import { GET_BASE, ADD_STUDENT, IS_FETCHING } from "./action-types";

const initialUserState = {
  data: {},
  isFetching: false

};

export const reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_BASE:
      return {
        ...state,
        data: action.data,
        isFetching: true,
      };
      case ADD_STUDENT:
        return {
          ...state,
          student: action.student
        }
        case IS_FETCHING:
          return {
            ...state,
            isFetching: action.isFetching
          }
    default:
      return state;
  }
};
