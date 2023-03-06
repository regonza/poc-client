import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const options = {
  shouldForwardProp: (prop) => prop !== 'fontcolor',
};

const StyledFormControl = styled(
  FormControl,
  options,
)(({ fontcolor, inputcolor, helpercolor }) => ({
  input: {
    color: fontcolor,
    fontSize: '2vh',
    fontFamily: 'Montserrat, sans-serif',
  },
  label: {
    color: fontcolor,
    fontSize: '2vh',
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
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: inputcolor,
    },
  },
  '& .MuiFormHelperText-root': {
    color: helpercolor,
  },

  
  '& .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    color: fontcolor,
  },
  
}));

const StyledMenuItem = styled(
  MenuItem,
  options,
)(({ fontcolor, inputcolor, helpercolor }) => ({
  input: {
    color: "#ffff",
    fontSize: '2vh',
    fontFamily: 'Montserrat, sans-serif',
  },
  label: {
    color: fontcolor,
    fontSize: '2vh',
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
      borderColor: 'yellow',
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
  
}));

const StyledSelect = styled(
  Select,
  options,
)(({ fontcolor, inputcolor, helpercolor }) => ({
  input: {
    color: fontcolor,
    fontSize: '2vh',
    fontFamily: 'Montserrat, sans-serif',
  },
  label: {
    color: fontcolor,
    fontSize: '2vh',
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
      borderColor: 'yellow',
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

  '& .MuiFormLabel-root':{
    color: '#ffff',
    '&.MuiSelect-select':{
      color: '#ffff',
    },
    '&.MuiInputLabel-shrink':{
      '&.MuiSelect-select':{
        color: '#ffff',
      },
    }
  },

  '& .MuiInputLabel-shrink':{
    color: '#ffff',
  },
  
  '& .channel-select-label':{
    color: '#ffff',
  },
}));

function Channel({ formData, setFormData }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <StyledFormControl fullWidth
               fontcolor="#ffffff"
               inputcolor="#e213bc"
               helpercolor="#ffffff"
      >
        <InputLabel
         id="channel-select-label"
         >
          Channel
        </InputLabel>
        <StyledSelect
          fontcolor="#ffffff"
          inputcolor="#e213bc"
          helpercolor="#ffffff"
          labelId="channel-select-label"
          id="channel-select"
          value={formData?.channel || "Channel"}
          label="Channel"
          onChange={(event) =>
            setFormData({ ...formData, channel: event.target.value })}
        >
          <StyledMenuItem 
          fontcolor="#ffffff"
          inputcolor="#e213bc"
          helpercolor="#ffffff"
          value={'whatsapp'}>
            Whatsapp
          </StyledMenuItem>
          <StyledMenuItem value={'web'}>Web</StyledMenuItem>
          <StyledMenuItem value={'ivr'}>IVR</StyledMenuItem>
        </StyledSelect>
      </StyledFormControl>
    </Box>
  );
}

export default Channel
