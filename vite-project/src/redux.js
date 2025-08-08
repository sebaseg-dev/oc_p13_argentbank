import { configureStore, createSlice } from '@reduxjs/toolkit'
import { getLoginCookie } from './services/cookies.js'

const cookies = getLoginCookie()

let connectedInitialValue = false
let tokenInitialValue = null
let firstnameInitialValue = null

if (cookies.token) {
    connectedInitialValue = true
    tokenInitialValue = cookies.token
}

const initialState = {
    connected: connectedInitialValue,
    token: tokenInitialValue,
    user: {
        fetched: false,
        firstName: firstnameInitialValue,
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