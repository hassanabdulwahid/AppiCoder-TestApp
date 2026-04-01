import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // validation
            if (!email.includes('@') || password.length < 8) {
                return rejectWithValue('Invalid email or password')
            }

            const token = `fake-jwt-${email}-${Date.now()}`
            console.log(token)
            await AsyncStorage.setItem('token', token)
            await AsyncStorage.setItem('email', email)

            return { token, email }
        } catch (error) {
            return rejectWithValue('Something went wrong')
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        email: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null
            state.email = null
            AsyncStorage.removeItem('token')
            AsyncStorage.removeItem('email')
        },
        setCredentials: (state, action) => {
            state.token = action.payload.token
            state.email = action.payload.email
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false
                state.token = action.payload.token
                state.email = action.payload.email
            })
    },
})

export const { logout, setCredentials } = authSlice.actions
export default authSlice.reducer