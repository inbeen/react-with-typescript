export * from './userSaga'
import { takeLatest } from 'redux-saga/effects'
import { USER_LOGIN_REQUEST } from '../constants'
import { userLoginProcess } from './userSaga'

export function* rootSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, userLoginProcess)
}
