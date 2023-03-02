import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Label({ formData, setFormData }) {
  return (
    <Box sx={{}}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
          <TextField
          id="intent"
          label="Intent"
          defaultValue=""
          helperText="Ingresa un intent"
          fullWidth
          onChange={(event) =>
              setFormData({ ...formData, intent: event.target.value })}
          />
      </Grid>
      <Grid item xs={6}>
          <TextField
            id="label"
            label="Label"
            defaultValue={convertToLabel(formData?.intent)}
            helperText="Ingresa un label"
            fullWidth
            onChange={(event) => {
              setFormData({ ...formData, label: event.target.value })
              convertToLabel(formData?.intent)
            }}    
          />
      </Grid>
    </Grid>
  </Box>
  );
}

function convertToLabel(intent){
  return intent.replace(/[\[\]]/g, '')
  .replace(/[\W\{\}\-]/g, '_')
  .replace(/_{2,}/g, '')
  .replace(/_$/g, '')
  .toUpperCase()
}

export default Label
