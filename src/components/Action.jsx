import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Action({ formData, setFormData }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <TextField
            id="action_desc"
            label="Descripcion"
            defaultValue=""
            helperText="Ingresa una descripcion"
            variant="standard"
            onChange={(event) =>
                setFormData({ ...formData, channel_desc: event.target.value })}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
            <Item>
                <Item>
                    <TextField
                    id="action"
                    label="Acccion"
                    defaultValue=""
                    helperText="Ingresa una accion"
                    variant="standard"
                    onChange={(event) =>
                        setFormData({ ...formData, channel: event.target.value })}
                    />
                </Item>
            </Item>
        </Grid>
      </Grid>
    </Box>
    );
}

export default Action
