import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { user } from './userReducer'

export default combineReducers({
  user,
  router: routerReducer
})
