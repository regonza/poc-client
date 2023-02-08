import React from "react";
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FlightRules from './select/Select'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap"
/>;


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SignUpInfo({ formData, setFormData }) {
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <Item><TextField
          id="aircraftId"
          type="text"
          label="AIRCRAFT ID:"
          value={formData.aircraftId}
          onChange={(event) =>
            setFormData({ ...formData, aircraftId: event.target.value })}
          margin="normal"
        /></Item>
      </Grid>
      <Grid item md={6}>
        <Item><FlightRules /></Item>
      </Grid>


    </Grid>
  );
}

export default SignUpInfo;
