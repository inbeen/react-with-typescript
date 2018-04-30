import * as constants from '../constants'
import { UserState } from '../types'

interface userType {
  type: constants.USER_LOGIN
  data?: UserState
}

export type UserAction = userType

export const userLoginRequest = (data: UserState, push) => ({
  type: constants.USER_LOGIN_REQUEST,
  data: {
    data,
    push
  }
})

export const userLogin = (data: UserState): userType => ({
  type: constants.USER_LOGIN,
  data
})
