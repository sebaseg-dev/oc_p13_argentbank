import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  connected: false,
  token: '',
  user: {
    // id: undefined,
    // email: '',
    firstName: '',
    lastName: '',
  }
}

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: initialState,
  reducers: {
    toggleConnected: (state, action) => {
      state.connected = !state.connected;
    }
  },
})

export const store = configureStore({
  reducer: {
    userLogin: userLoginSlice.reducer
  }
})

export const { toggleConnected  } = userLoginSlice.actions;