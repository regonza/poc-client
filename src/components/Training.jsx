import React, { useState } from "react";
import  { MuiChipsInput } from 'mui-chips-input';
import { Input } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircleFlag } from 'react-circle-flags';

const options = {
  shouldForwardProp: (prop) => prop !== 'fontcolor',
};

const StyledMuiChipsInput = styled(
  MuiChipsInput,
  Input,
  options,
)(({ fontcolor, inputcolor, helpercolor }) => ({
  input: {
    color: fontcolor,
    fontSize: '2vh',
    fontFamily: 'Montserrat, sans-serif',
  },
  label: {
    color: fontcolor,
    fontSize: '1.4vh',
    fontFamily: 'Montserrat, sans-serif',
  },
  
  '& input:valid + fieldset': {
    borderColor: inputcolor,
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 10,
    padding: '10px !important', // override inline-style
    borderColor: inputcolor,
  },
  '& label.Mui-focused': {
    left: 5,
    color: fontcolor,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: inputcolor,
    },
    '&:hover fieldset': {
      borderColor: helpercolor,
    },
    '&.Mui-focused fieldset': {
      borderColor: inputcolor,
    },
  },
  '& .MuiFormHelperText-root': {
    color: helpercolor,
  },
  '& .MuiInputBase-multiline': {
    color: fontcolor,
  },
  '& MuiInputBase-root': {
    color: fontcolor,
  },
  '& .MuiChipsInput-Chip': {
    color: inputcolor,
  },
  '& .MuiChip-label': {
    color: fontcolor,
  },
  '& .MuiChip-root': {
    color: fontcolor,
    backgroundColor: inputcolor,
  },
  
}));

function Training({ formData, setFormData}) {
  const [chips, setChips] = useState([])

  const handleChange = (newChips, id) => {
    setChips(newChips)
    if(id === 'training_es'){
      setFormData({ ...formData, training_es: newChips })
    }
    if(id === 'training_pt'){
      setFormData({ ...formData, training_pt: newChips })
    }
    if(id === 'training_en'){
      setFormData({ ...formData, training_en: newChips })
    }
  }

  return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
              <CircleFlag countryCode="es" height="50" className='flags'/>
          </Grid>

          <Grid item xs={8}>
          <StyledMuiChipsInput
              id="training_es" 
              value={formData?.training_es}
              label="escribe una frase en español y presiona enter"
              fontcolor="#ffffff"
              inputcolor="#e27a13"
              helpercolor="#f3f69d"
              fullWidth
              onChange={(event) =>
                handleChange(event, 'training_es')
              }
           />
          </Grid>

          <Grid item xs={4}>
            <CircleFlag countryCode="br" height="50" className='flags'/>
          </Grid>
          <Grid item xs={8}>
            <StyledMuiChipsInput
              id="training_pt" 
              value={formData?.training_pt}
              label="escribe una frase en portugues y presiona enter"
              fontcolor="#ffffff"
              inputcolor="#215e04"
              helpercolor="#f3f69d"
              fullWidth
              onChange={(event) =>
                handleChange(event, 'training_pt')
              }
            />
          </Grid>

          <Grid item xs={4}>
            <CircleFlag countryCode="us" height="50" className='flags'/>
          </Grid>
          <Grid item xs={8}>
            <StyledMuiChipsInput
              id="training_en" 
              value={formData?.training_en}
              label="escribe una frase en ingles y presiona enter"
              fontcolor="#ffffff"
              inputcolor="#130f6c"
              helpercolor="#f10b0b"
              fullWidth
              onChange={(event) =>
                handleChange(event, 'training_en')
              }
            />
          </Grid>
        </Grid>
      </Box>
  );
}



export default Training;
