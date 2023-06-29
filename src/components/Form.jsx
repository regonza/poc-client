import React, { useState } from "react";
import '@fontsource/montserrat';
import '../App.css'
import Label from './Label';
import Action from "./Action";
import Content from "./Content";
import Options from "./Options";
import Training from "./Training";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Divider } from "@mui/material";
import { Typography } from '@mui/material';
import { PrimaryButton, SecondaryButton } from "./Buttons";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    intent: "",
    label: "",
    channel: "",
    language: "",
    context: "",
    content_es: "",
    content_pt: "",
    content_en: "",
    training_es: "",
    training_pt: "",
    training_en: "",
    category:"",
    actions: [],
    option_es: [],
    option_en: [],
    option_pt: [],
  });

  // how to make this dynamic??
  const FormTitles = ["LABEL", "CONTENIDO", "OPTIONS", "FRASES DE ENTRENAMIENTO", "ACCIONES"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Label formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Content formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Options formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Training formData={formData} setFormData={setFormData} />;
    } else {
      return <Action formData={formData} setFormData={setFormData}/>;
    }
  }; 

  return (
    <Grid container spacing={2} minHeight={160}>
      <Container >
        <Box sx={{ height: '10vh'}} className="titles">
        
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
              <Typography
                variant="h1"
                color="inherit"
                component="div"
                fontFamily={'Montserrat, sans-serif'}
                fontWeight={'500'}
                fontSize={'2em'}
                className="titles-title"
              >
                  {FormTitles[page]}
              </Typography>
            </Grid>

            <Divider variant="middle" />

            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
              <Typography
                variant="h6"
                color="#F4F4F4"
                component="div"
                fontFamily={'Montserrat, sans-serif'}
                fontWeight={'200'}
                className="titles-title"
              >
                  {formData?.label}
              </Typography>
            </Grid>
        

        </Box>

        <Box sx={{ height: '50vh' }} className="form">
          <Grid item xs={12}>
            {PageDisplay()}
          </Grid>
        </Box>

        <Box sx={{ height: '5vh' }}>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-evenly"
          >
            <SecondaryButton
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }} />
            <PrimaryButton
              title={page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert(JSON.stringify(formData));
                  console.log(JSON.stringify(formData));
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }} />
          </Stack>
        </Box>
      </Container>
    </Grid>
  );
}

export default Form;