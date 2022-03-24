import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useSelector} from "react-redux";

const columns = [
    { field: 'PK', headerName: 'PK', width: 90},
    { field: 'SK', headerName: 'SK', width: 160},
    { field: 'date', headerName: 'date', width: 160},
    { field: 'playerID', headerName: 'playerID', width: 160}
]

export default function ShowPlayer() {
    const response = useSelector((state) => state.http.response)
    return (
        <div style={{ height: 400}}>
            <DataGrid
                rows={response}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </div>
    );
}
