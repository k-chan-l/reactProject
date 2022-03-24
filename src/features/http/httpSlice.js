import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const axios = require('axios').default;


export const getUser = createAsyncThunk(
    'http/getUser', // '사용할 슬라이스/함수이름'
    async (data) => {//data => 매개변수 하나만 가능 여러개 할경우 객체로 변경해서 전달
        const name = data;
        const response = await axios.get('https://aeptktnm55.execute-api.ap-northeast-2.amazonaws.com/default/lungrow-minecraft-getInfo-ByPlayerName', {
            params: {
                playerName: name
            }
        });
        console.log(response.data.Items);
        return response.data; //리턴시 아래의 리듀서 도착 결과별로 함수가 나뉨
    }
)

export const postUser = createAsyncThunk(
    'http/postUser',
    async (data) => {
        var value = JSON.parse(data);
        // console.log(value);
        const response = await axios.post('https://kv2s3duleh.execute-api.ap-northeast-2.amazonaws.com/default/lungrow-minecraft-create-data',value)
        console.log(response);
    }
)


//Slice 생성 -> 사용할 리덕스 변수 및 메소드로 추정
export const httpSlice = createSlice({
    name: 'http',
    initialState: {
        res: "push the submit button",
        name: "",
        value: "",
        response: []
    },
    reducers: {
        getValue: (state,action) => {
            state.res = "action.payload" // action.payload는 매개변수를 통해 전달 받은 값
        },
        setValue: (state, action) => {
            state.value = action.payload;
        }

    },
    extraReducers: {//비동기 리듀서 사용시 이용
        [getUser.pending]: (state, action) => {//리듀서 도착 전
            state.res = "loading"
        },
        [getUser.fulfilled]: (state, action) => {//리듀서 성공
            if(action.payload.Items.length == 0)
            {
                state.res = "해당 플레이어는 존재하지 않음"
                state.response = []
                return;
            }
            state.res = "";
            state.response = action.payload.Items;
            var lastItem = action.payload.Items[action.payload.Items.length-1];
            lastItem.SK = 'playerName#'+lastItem.playerInfo.playerName+'#date#'+getCurrentTime();
            lastItem.playerInfo.path = new Array();
            delete lastItem.date;
            state.value = JSON.stringify(lastItem);
            for (let i = 0; i < state.response.length; i++) {
                state.response[i].id = i+1
            }
        },
        [getUser.rejected]: (state, action) => {//리듀서 실패
            state.res = "error";
        },
        [postUser.pending]: (state, action) => {
            state.res = "posting user data"
        },
        [postUser.fulfilled]: (state, action) => {
            state.res = "data upload success"
        },
        [postUser.rejected]: (state, action) => {
            state.res = "data upload failed"
        }
    }
})

function getCurrentTime() {
    const now = new Date (Date.now());
    now.setHours(now.getHours()+9);
    console.log(now.toISOString());
    return now.toISOString();
}

export const {getValue, setValue} = httpSlice.actions

export default httpSlice.reducer