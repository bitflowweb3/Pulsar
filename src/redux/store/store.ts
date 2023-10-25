import { configureStore } from '@reduxjs/toolkit';
import serverReducer from '../slices/servers';

const reducers = {
    server: serverReducer
}

const store = configureStore({
    reducer: reducers,
    devTools: true,
})
export default store;
