import {
  GET_BASE,
  ADD_STUDENT,
  IS_FETCHING,
  EDIT_STUDENT,
  ADD_GROUP,
} from "./action-types";

const initialUserState = {
  data: {},
  isFetching: false,
  student: "",
  group: ''
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
      state.data.data.students.push(action.student.newStudent);
      return {
        ...state,
        student: action.student,
      };
    case ADD_GROUP:

      return {
        ...state,
        group: action.group,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case EDIT_STUDENT:
      const data = JSON.parse(JSON.stringify(state.data));
      data.data.students.forEach((item, index) => {
        if (item._id === action.student._id) {
          data.data.students[index] = action.student;
          // data.data.students = [action.student];
        }
      });
      const newState = JSON.parse(JSON.stringify(state));
      newState.data = data;
      return {
        ...newState,
      };
    default:
      return state;
  }
};
