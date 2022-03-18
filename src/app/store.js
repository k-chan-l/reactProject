import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import httpReducer from '../features/http/httpSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        http: httpReducer,
    },
})