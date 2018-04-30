import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import { rootSaga } from '../sagas'

const store = create()

export default store

function create() {
  const sagaMiddleware = createSagaMiddleware()
  const args = applyMiddleware(sagaMiddleware)
  const store = createStore(reducers, args)
  sagaMiddleware.run(rootSaga)
  return store
}
