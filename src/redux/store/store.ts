import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import serverReducer from '../slices/servers';

const rootReducers = combineReducers({
    server: serverReducer,
})

const store = configureStore({
    reducer: rootReducers,
    devTools: true,
})
export default store;
