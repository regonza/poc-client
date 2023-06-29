import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';

const options = {
  shouldForwardProp: (prop) => prop !== 'fontcolor',
};

const StyledTextField = styled(
  TextField,
  Input,
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


function StyledTxtField(fontcolor, prop) {
  return (
    <StyledTextField
    fontcolor={prop.fontcolor}
    inputcolor={prop.inputcolor}
    helpercolor={prop.helpercolor}
    id={prop.id}
    label={prop.label}
    />
  );
}

export default StyledTxtField;