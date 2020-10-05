import { createStore, combineReducers } from 'redux'

import reducer from './reducer'

const rootReducer = combineReducers({
  user: reducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore
