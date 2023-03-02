import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Label({ formData, setFormData }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>
          <TextField
          id="intent"
          label="Intent"
          defaultValue=""
          helperText="Ingresa un intent"
          variant="standard"
          onChange={(event) =>
              setFormData({ ...formData, intent: event.target.value })}
          />
        </Item>
      </Grid>
      <Grid item xs={4}>
          <Item>
              <Item>
                  <TextField
                  id="label"
                  label="Label"
                  defaultValue={convertToLabel(formData?.intent)}
                  helperText="Ingresa un label"
                  variant="standard"
                  onChange={(event) => {
                    setFormData({ ...formData, label: event.target.value })
                    convertToLabel(formData?.intent)
                  }}    
                  />
              </Item>
          </Item>
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
