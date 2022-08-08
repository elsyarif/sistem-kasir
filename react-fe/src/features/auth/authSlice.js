import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../services/auth/authService'

export const register =  createAsyncThunk(
    "auth/register",    
)

export const login = createAsyncThunk(
    'auth/login',
    async({ username, password, remember }, thunkAPI) => {
       try {
            const response = await AuthService.login({ username, password })
            if(remember){
                localStorage.setItem('gxg-hasn', response.data.data.access_token)
            }else{
                sessionStorage.setItem('gxg-hasn', response.data.data.access_token)
            }
            response.data.data.remember = remember
            return response.data.data
       } catch (error) {
            return thunkAPI.rejectWithValue();
       } 
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async(thunkAPI) => {
        try {
            const response = await AuthService.logout()
            if(response.status === 200){
                if(localStorage.getItem('gxg-hasn')){
                    localStorage.removeItem('gxg-hasn')
                }

                if(sessionStorage.getItem('gxg-hasn')){
                    sessionStorage.removeItem('gxg-hasn')
                }
            }
            return response.data
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
    reducers: {
        logoff:(state) => {
            state.isLoggedIn = false
            state.user = null
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(login.fulfilled, (state, action) => {
            const { access_token, create_at, is_active, update_at, ...result} = action.payload
            state.isLoggedIn = true
            state.user = result
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoggedIn = false
            state.user = null
        })
        //TODO: logout
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isLoggedIn = false
            state.user = null
        })
        builder.addCase(logout.rejected, (state, action) => {
            console.log(action.payload)
        })
    }
})
export const authSelector = (state) => state.auth
export const { logoff } = authSlice.actions
export default authSlice.reducer