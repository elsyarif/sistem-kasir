import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../services/authService'

export const register =  createAsyncThunk(
    "auth/register",    
)

export const login = createAsyncThunk(
    'auth/login',
    async({ formData }, thunkAPI) => {
       try {
            const data = await AuthService.login(formData)
            console.log(data)
            return data.data
       } catch (error) {
            return thunkAPI.rejectWithValue();
       } 
    }
)

const initialState = {
    isLoggedIn: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [login.fulfilled] : (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload.data
        },
        [login.rejected] : (state, action) => {
            state.isLoggedIn = false
            state.user = null
        }
    }
})

export default authSlice.reducer