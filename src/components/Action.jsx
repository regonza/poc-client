import '../App.css'
import React, { useState } from "react";
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Action', width: 230 },
  { field: 'lastName', headerName: 'Description', width: 330, editable: true },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: ' ', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Action({ formData, setFormData }) {
  const [selectedRows, setSelectedRows] = React.useState([]);
  console.log('---> ',JSON.stringify(selectedRows, null, 4));

  const handleChange = (selectedRows) => {
    setSelectedRows(selectedRows)
    setFormData({ ...formData, actions: selectedRows });
  }

  return (
    <div className='gridStyled'>
      <DataGrid
        rows={rows}
        columns={columns}
        // columns={[{ field: 'lastName', editable: true }]}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        // apiRef={apiRef}
        onRowSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = rows.filter((row) =>
            selectedIDs.has(row.id),
          );
          handleChange(selectedRows);
        }}
        
        // editMode='true'
      />
    </div>
  );
}

export default Action;