import React, { useState }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getValue, getUser, setValue, postUser} from './httpSlice'


export function Http() {
    const response = useSelector((state) => state.http.res)
    const value = useSelector((state) => state.http.value)
    const [PlayerName, setPlayerName] = useState('');
    const dispatch = useDispatch()

    return (
        <div>
            <div style={{marginTop : '30px'}}>
                    <input placeholder ={"플레이어 이름을 입력하세요"} value={PlayerName} onChange={e => setPlayerName((e.target.value))}/>
                    {" "}
                    <button onClick={() => dispatch(getUser(PlayerName))}>
                        조회
                    </button>
                <br/>
                <div style={{justifyContent : 'center', marginTop : '50px'}}>
                    <div style={{float: 'left', width:'50%', wordBreak:"break-all"}}>
                        <span>
                            {response}
                        </span>
                    </div>
                    <div style={{float: 'right', width:'50%'}}>
                        <textarea style={{width: '100%', height : '400px' ,resize : 'none'}}
                        placeholder={"전송될 데이터가 표시될 영역"} value={value.toString()}
                        onChange={e => dispatch(setValue(e.target.value))}/>
                        <button onClick={() => dispatch(postUser(value))}>
                            전송
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
