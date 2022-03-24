import {postUser, setValue} from "../httpSlice";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export function SendPlayer() {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.http.value)
    return (
        <div>
            <textarea style={{width: '100%', height : '400px' ,resize : 'none'}}
                                  placeholder={"전송될 데이터가 표시될 영역"} value={value.toString()}
                                  onChange={e => dispatch(setValue(e.target.value))}/>
            <button onClick={() => dispatch(postUser(value))}>
                전송
            </button>
        </div>
    )
}