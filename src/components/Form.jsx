import React, { useState } from "react";
import {PrimaryButton, SecondaryButton} from "./Buttons";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Label from './Label';
import Channel from "./Channel";
import Action from "./Action";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AlignHorizontalCenter } from "@mui/icons-material";


function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    intent: "",
    label: "",
    action: "",
    channel: "",
    language: "",
    type: "",
    content_es:"",
    content_pt:"",
    content_en:"",
  });

  const FormTitles = ["Crear un Intent o Label", "Experiencia en idiomas", "Configuracion: {render type, action, etc..}"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Label formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Channel formData={formData} setFormData={setFormData} />;
    } else {
      return <Action formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Grid>
      <Container maxWidth="lg">
        <Box sx={{height:'50vh'}}> 
          <Paper elevation={3} sx={{height:'50vh', padding:'20px'}}>
          <Grid item xs={12} sx={{textAlign:'center'}}>
              <h1>{FormTitles[page]}</h1>
          </Grid>
          <Grid item xs={12}>
            {PageDisplay()}
          </Grid>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-evenly"
            sx={{ mt: 3, ml: 5, p: 3 }}
          >
            <SecondaryButton
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              } } />
            <PrimaryButton
              title={page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              } } />
          </Stack>
          </Paper>
        </Box>
      </Container>
    </Grid>
  );
}

export default Form;