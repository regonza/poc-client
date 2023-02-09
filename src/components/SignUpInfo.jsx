import React from "react";
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FlightRules from './select/Select'
import TypeOfFlight from './select/TypeOfFlight'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;900&display=swap" rel="stylesheet"></link>

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SignUpInfo({ formData, setFormData }) {
  return (
    <Grid container spacing={3}>
      <Grid item md={3}>
        <Item><TextField
          id="aircraftId"
          type="text"
          label="AIRCRAFT ID:"
          value={formData.aircraftId}
          onChange={(event) =>
            setFormData({ ...formData, aircraftId: event.target.value })}
          margin="normal"
          InputLabelProps={{ fontFamily: ['Montserrat', 'sans-serif'], fontWeight: '300' }}
        /></Item>
      </Grid>
      <Grid item md={3}>
        <Item>
          <TextField
            id="numberOfAcft"
            type="number"
            label="NUMBER:"
            value={formData.numberOfAcft}
            onChange={(event) =>
              setFormData({ ...formData, numberOfAcft: event.target.value })}
            margin="normal"
            InputLabelProps={{ fontFamily: ['Montserrat', 'sans-serif'], fontWeight: '300' }}
          />
        </Item>
      </Grid>
      <Grid item md={6}>
        <Item>
          <FlightRules
            formData={formData}
            setFormData={setFormData}
          />
        </Item>
      </Grid>
      <Grid item md={6}>
        <Item>
          <TypeOfFlight
            formData={formData}
            setFormData={setFormData}
          />
        </Item>
      </Grid>
    </Grid>
  );
}

export default SignUpInfo;
