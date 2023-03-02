import '../App.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Channel({ formData, setFormData }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField
                id="channel_desc"
                label="Descripcion"
                defaultValue=""
                helperText="Ingresa una descripcion"
                fullWidth
                onChange={(event) =>
                    setFormData({ ...formData, channel_desc: event.target.value })}
            />
        </Grid>
        <Grid item xs={4}>
            <TextField
                id="channel"
                label="Canal"
                defaultValue=""
                helperText="Ingresa un canal"
                fullWidth
                onChange={(event) =>
                    setFormData({ ...formData, channel: event.target.value })}
            />
        </Grid>
      </Grid>
    </Box>
    );
}

export default Channel
