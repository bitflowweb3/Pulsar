import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/apiservice';

const serverSlice = createSlice({
    name: 'server',
    initialState: {
        serverList: [],
    },
    reducers: {
        
    }
})

export default serverSlice.reducer;
