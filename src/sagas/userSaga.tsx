import { put } from 'redux-saga/effects'
import http from '../http'
import { userLogin, userLoginRequest } from '../actions'
import { UserState } from '../types'

export function* userLoginProcess(action) {
  let res =  yield http.post('/login', action.data.data)
  if(res.status === 200) {
    if(res.data.status) {
      localStorage.setItem('user', JSON.stringify(res.data.data))
      yield put(userLogin(res.data.data))
      action.data.push('/')
    } else alert('login error')
  }
}
