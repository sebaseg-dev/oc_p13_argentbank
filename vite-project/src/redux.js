import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    connected: false,
    token: '',
    user: {
        fetched: false,
        firstName: '',
        lastName: '',
    }
}

const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState: initialState,
    reducers: {
        toggleConnected: (state, action) => {
            state.connected = !state.connected
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        toggleUserFetched: (state, action) => {
            state.user.fetched = !state.user.fetched
        },
        setUserInfo: (state, action) => {
            state.user.firstName = action.payload.firstName
            state.user.lastName = action.payload.lastName
        }
    },
})

export const store = configureStore({
    reducer: {
        userLogin: userLoginSlice.reducer
    }
})

export const {
    toggleConnected,
    setToken,
    toggleUserFetched,
    setUserInfo
} = userLoginSlice.actions