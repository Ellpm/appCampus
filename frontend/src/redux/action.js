import { GET_BASE } from "./action-types";
import { GET_BASE_SAGA, ADD_STUDENT, ADD_STUDENT_SAGA } from "./action-types";


export const getBase = (payload) => {
  return {
    type: GET_BASE,
    data: payload,
  };
};

export const getBaseSaga = () => {
  return {
    type: GET_BASE_SAGA,    
  };
};

export const addStudent = (payload) => {
  return {
    type: ADD_STUDENT,
    student: payload,
  };
};

export const addStudentSaga = (payload) => {
  return {
    type: ADD_STUDENT_SAGA,
    name: payload
  };
};