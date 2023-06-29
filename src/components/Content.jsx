
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Input } from '@mui/material';
import { CircleFlag } from 'react-circle-flags';

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


function Content({ formData, setFormData, intentData, setLabelValue }) {
  return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
              <CircleFlag countryCode="es" height="50" className='flags'/>
          </Grid>
          <Grid item xs={8}>
              <StyledTextField
                  id="content_es"
                  fontcolor="#ffffff"
                  inputcolor="#e213bc"
                  helpercolor="#ffffff"
                  label="Español"
                  fullWidth
                  multiline
                  rows={4}
                  margin="none"
                  defaultValue={formData?.content_es || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, content_es: event.target.value })}
                />
          </Grid>

          <Grid item xs={4}>
            <CircleFlag countryCode="br" height="50" className='flags'/>
          </Grid>
          <Grid item xs={8}>
              <StyledTextField
                  id="content_pt"
                  fontcolor="#ffffff"
                  inputcolor="#e213bc"
                  helpercolor="#ffffff"
                  label="Portugues"
                  fullWidth
                  multiline
                  rows={4}
                  margin="none"
                  defaultValue={formData?.content_pt || ""}
                  onChange={(event) =>
                    setFormData({ ...formData, content_pt: event.target.value })}
                />
          </Grid>

          <Grid item xs={4}>
            <CircleFlag countryCode="us" height="50" className='flags'/>
          </Grid>
          <Grid item xs={8}>
            <StyledTextField
                id="content_en"
                fontcolor="#ffffff"
                inputcolor="#e213bc"
                helpercolor="#ffffff"
                label="Ingles"
                fullWidth
                multiline
                rows={4}
                margin="none"
                defaultValue={formData?.content_en || ""}
                onChange={(event) =>
                  setFormData({ ...formData, content_en: event.target.value })}
              />
          </Grid>
        </Grid>
      </Box>
  );
}

export default Content;