import { call, put, takeLatest } from "redux-saga/effects";
import { GET_BASE_SAGA, ADD_STUDENT_SAGA } from '../action-types';
import { getBase, addStudent } from '../action';
import { getData } from '../../fetches/getData';
import { addStudentFetch } from '../../fetches/addStudent';
function* fetchSagaGetData(payload) {
  try {
    const data = yield call(getData);
    yield put(getBase(data));
  } catch (e) {
    console.log(e);
  }
}
function* fetchSagaAddStudent(payload) {
  try {
    const data = yield call(addStudentFetch, payload.name);
   
    
    yield put(addStudent(data));
  } catch (e) {
    console.log(e);
  }
}





export default function* actionWatcher() {
  yield takeLatest(GET_BASE_SAGA, fetchSagaGetData);
  yield takeLatest(ADD_STUDENT_SAGA, fetchSagaAddStudent);
}

