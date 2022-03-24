import {getUser} from "../httpSlice";
import React, {useState} from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import {useDispatch} from "react-redux";

export function GetPlayer() {
    const [PlayerName, setPlayerName] = useState('');
    const dispatch = useDispatch()
    return (
        <div>
            <Input inputProps={PlayerName} placeholder="플레이어 이름을 입력"/>
            {/*<input placeholder={} value={PlayerName} onChange={e => setPlayerName((e.target.value))}/>*/}
            {" "}
            <Button size={"small"} onClick={() => dispatch(getUser(PlayerName))} variant="contained" endIcon={<SendIcon />} >
                조회
            </Button>
        </div>
    )
}