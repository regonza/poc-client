import { useState } from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Language from '../components/Language';
import { Input, Typography } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Gif, Margin } from '@mui/icons-material';
import Content from './Content';
import Channel from './Channel';

const options = {
  shouldForwardProp: (prop) => prop !== 'fontcolor',
};

const StyledTextField = styled(
  TextField,
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


function Label({ formData, setFormData, intentData, setLabelValue }) {
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);

  const inputEvent1 = (e) => {
    const label = convertToLabel(e.target.value);
    setData1(e.target.value);
    setData2(label);
    setFormData({ ...formData, intent: e.target.value, label: label })
  };

  return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              fontcolor="#ffffff"
              inputcolor="#e213bc"
              helpercolor="#ffffff"
              id="intent"
              label="Intent"
              defaultValue={formData?.intent}
              helperText="El label se generará automáticamente"
              fullWidth
              onChange={(event) =>
                inputEvent1(event)
              }
            />
          </Grid>

          <Grid item xs={12}>
            <Channel formData={formData} setFormData={setFormData}/>
          </Grid>           
            
        </Grid>
      </Box>
  );
}

function convertToLabel(intent) {
  console.log('convirtiendo a label')
  return intent.replace(/[\[\]]/g, '')
    .replace(/[\W\{\}\-]/g, '_')
    .replace(/_{2,}/g, '')
    .replace(/_$/g, '')
    .toUpperCase()
}


const changeSecondValue = (e) => {
  setFirstVal(e.target.value);
  setSecondVal(convertToLabel(e.target.value));
}

const changeLabelValue = (e) => {
  setLabelValue(e.target.value);
}

const setLabelValue = (intent) => {
  convertToLabel(intent)
}


export default Label
