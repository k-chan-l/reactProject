import { createSlice } from '@reduxjs/toolkit'

//Slice 생성 -> 사용할 리덕스 변수 및 메소드로 추정
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,// 사용할 변수
    },
    reducers: {
        increment: (state) => {
            state.value += 1 // 변수 값을 증가시키는 함수
        },
        decrement: (state) => {
            state.value -= 1 // 변수 값을 감소시키는 함수
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
//메소드를 외부로 빼냄

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    })
}

export default counterSlice.reducer
//메소드 전체 다 보냄