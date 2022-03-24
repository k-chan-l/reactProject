import React, { useState }from 'react'
import {GetPlayer} from "./container/GetPlayer";
import ShowPlayer from "./container/ShowPlayer";
import {SendPlayer} from "./container/SendPlayer";
import Grid from '@mui/material/Grid';

export function Http() {
    return (
        <div style={{marginTop : '30px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <GetPlayer/>
                </Grid>
                <Grid item xs={6}>
                    <ShowPlayer/>
                </Grid>
                <Grid item xs={6}>
                    <SendPlayer/>
                </Grid>
            </Grid>
        </div>
    )
}
