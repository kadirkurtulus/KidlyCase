
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';

import favoriReducer from './slices/favori'

const rootReducer = combineReducers({
  favori: favoriReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;