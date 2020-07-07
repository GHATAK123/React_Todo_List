import { createStore, combineReducers } from 'redux';

const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);