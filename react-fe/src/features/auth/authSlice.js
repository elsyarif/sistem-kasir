import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../services/authService'

export const register =  createAsyncThunk(
    "auth/register",    
)

export const login = createAsyncThunk(
    'auth/login',
    async({ username, password, remember }, thunkAPI) => {
        debugger
       try {
            const response = await AuthService.login({ username, password })
            if(remember){
                localStorage.setItem('gxg-hasn', response.data.data.access_token)
            }else{
                sessionStorage.setItem('gxg-hasn', response.data.data.access_token)
            }
            return response.data.data
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
    extraReducers: (builder) =>{
        builder.addCase(login.fulfilled, (state, action) => {
            debugger
            const { create_at, is_active, update_at, ...result} = action.payload
            state.isLoggedIn = true
            state.user = result
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoggedIn = false
            state.user = null
        })
    }
})
export const authSelector = (state) => state.auth
export default authSlice.reducer