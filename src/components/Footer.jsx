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

function Footer({ formData, setFormData }) {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Select
            id="language"
            label="Lenguaje"
            defaultValue="es"
            value={formData?.language}
            onChange={(event) =>
              setFormData({ ...formData, language: event.target.value })}
            >
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="pt">Portugues</MenuItem>
          <MenuItem value="en">Ingles</MenuItem>
        </Select>
        </Grid>
      </Grid>
    </Box>
    );
}

export default Footer;