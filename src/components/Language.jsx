import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.checked,
  });
};

function Language({ formData, setFormData }) {
  return (
    <Grid>
        <Grid item xs={4}>
            <StyledTextField
                id="content_es"
                fontColor="#ffffff"
                inputcolor="#e213bc"
                helpercolor="#ffffff"
                label="Español"
                fullWidth
                multiline
                rows={4}
                margin="dense"
                defaultValue={formData?.content_es || ""}
                onChange={(event) =>
                  setFormData({ ...formData, content_es: event.target.value })}
              />
        </Grid>
        <Grid item xs={4}>
          <StyledTextField
              id="content_pt"
              item xs={4}
              fontColor="#ffffff"
              inputcolor="#e213bc"
              helpercolor="#ffffff"
              label="Portugues"
              fullWidth
              multiline
              rows={4}
              margin="dense"
              defaultValue={formData?.content_pt || ""}
              onChange={(event) =>
                setFormData({ ...formData, content_pt: event.target.value })}
            />
        </Grid>
        <Grid item xs={4}>
          <StyledTextField
              id="content_en"
              item xs={4}
              fontColor="#ffffff"
              inputcolor="#e213bc"
              helpercolor="#ffffff"
              label="Ingles"
              fullWidth
              multiline
              rows={4}
              margin="dense"
              defaultValue={formData?.content_en || ""}
              onChange={(event) =>
                setFormData({ ...formData, content_en: event.target.value })}
            />
        </Grid>
    </Grid>
  );

  const handleChange = (e) => {
    if (e.target.name === "spanish") {
      setCheckboxesState({
        spanish: e.target.checked,
        portuguese: false,
        english: false
      });
    } else if (e.target.name === "portuguese") {
      setCheckboxesState({
        spanish: false,
        portuguese: e.target.checked,
        english: false
      });
    } else if (e.target.name === "english") {
      setCheckboxesState({
        spanish: false,
        portuguese: false,
        english: e.target.checked
      });
    }
  }
}

export default Language
