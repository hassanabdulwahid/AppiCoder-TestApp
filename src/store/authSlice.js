import AsyncStorage from '@react-native-async-storage/async-storage'

const PENDING = 'auth/loginPending'
const SUCCESS = 'auth/loginFulfilled'
const FAIL = 'auth/loginRejected'
const LOGOUT = 'auth/logout'

export const loginThunk = ({ email, password }) => async (dispatch) => {
    dispatch({ type: PENDING })
    try {
        if (!email.includes('@') || password.length < 8)
            return dispatch({ type: FAIL, payload: 'Invalid email or password' })

        const token = `fake-jwt-${email}-${Date.now()}`
        await AsyncStorage.setItem('token', token)
        await AsyncStorage.setItem('email', email)
        dispatch({ type: SUCCESS, payload: { token, email } })
    } catch (e) {
        console.log('login error', e || "login failed")
        dispatch({ type: FAIL, payload: 'Something went wrong' })
    }
}

export const logout = () => async (dispatch) => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('email')
    dispatch({ type: LOGOUT })
}

const initialState = { token: null, email: null, loading: false, error: null }

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case PENDING: return { ...state, loading: true, error: null }
        case SUCCESS: return { ...state, loading: false, ...action.payload }
        case FAIL: return { ...state, loading: false, error: action.payload }
        case LOGOUT: return { ...initialState }
        default: return state
    }
}