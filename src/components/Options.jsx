import React, { useState } from "react";
import  { MuiChipsInput } from 'mui-chips-input';
import { Input } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircleFlag } from 'react-circle-flags';
import Button from '@mui/material/Button';

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


let variation_es = false

function Options({ formData, setFormData, }) {
  const [chips, setChips] = useState([])

  const handleChange = (newChips, id) => {
    setChips(newChips)
    if(id === 'option_es'){
      setFormData({ ...formData, option_es: newChips })
      variation_es = formData.option_es.lenght == 1 ? false : true;
      console.log("variations: ", formData.training_es)
    }
    if(id === 'option_pt'){
      setFormData({ ...formData, option_pt: newChips })
    }
    if(id === 'option_en'){
      setFormData({ ...formData, option_en: newChips })
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
              id="option_es" 
              value={formData?.option_es}
              label="escribe una frase en español y presiona enter"
              fontcolor="#ffffff"
              inputcolor="#e27a13"
              helpercolor="#f3f69d"
              fullWidth
              onChange={(event) =>
                handleChange(event, 'option_es')
              }
           />
            
           <Button
              variant="contained"
              disabled={!variation_es}
              // onClick={makeVariations(formData.training_es)}
            >Make variations
            </Button>
          </Grid>

          <Grid item xs={4}>
            <CircleFlag countryCode="br" height="50" className='flags'/>
          </Grid>
          <Grid item xs={8}>
            <StyledMuiChipsInput
              id="option_pt" 
              value={formData?.option_pt}
              label="escribe una frase en portugues y presiona enter"
              fontcolor="#ffffff"
              inputcolor="#215e04"
              helpercolor="#f3f69d"
              fullWidth
              onChange={(event) =>
                handleChange(event, 'option_pt')
              }
            />
          </Grid>

          <Grid item xs={4}>
            <CircleFlag countryCode="us" height="50" className='flags'/>
          </Grid>
          <Grid item xs={8}>
            <StyledMuiChipsInput
              id="option_en" 
              value={formData?.option_en}
              label="escribe una frase en ingles y presiona enter"
              fontcolor="#ffffff"
              inputcolor="#130f6c"
              helpercolor="#f10b0b"
              fullWidth
              onChange={(event) =>
                handleChange(event, 'option_en')
              }
            />
          </Grid>
        </Grid>
      </Box>
  );
}


export default Options;