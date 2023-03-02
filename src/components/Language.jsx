import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Language({ formData, setFormData }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <TextField
            id="language_desc"
            label="Descripcion"
            defaultValue=""
            helperText="Ingresa una descripcion"
            variant="standard"
            onChange={(event) =>
                setFormData({ ...formData, language_desc: event.target.value })}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
            <Item>
            <Select
          id="language"
          label="Lenguaje"
          defaultValue="es"
          value={formData?.typeOfFlight}
          onChange={(event) =>
            setFormData({ ...formData, typeOfFlight: event.target.value })}
        >
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="pt">Portugues</MenuItem>
          <MenuItem value="en">Ingles</MenuItem>
        </Select>
                <Item>
                    <TextField
                    id="language"
                    label="Lenguaje"
                    defaultValue=""
                    helperText="Ingresa un lenguaje"
                    variant="standard"
                    onChange={(event) =>
                        setFormData({ ...formData, language: event.target.value })}
                    />
                </Item>
            </Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default Language
