import { UserAction } from '../actions'
import { UserState } from '../types'
import { USER_LOGIN } from '../constants'

const initState = {
  username: '',
  password: '',
  avatar: ''
}

export function user(state: UserState = initState, action: UserAction): UserState {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        username: action.data.username,
        password: action.data.password,
        avatar: action.data.avatar
      }
  }
  return state
}
