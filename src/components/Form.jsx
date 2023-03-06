import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Label from './Label';
import Channel from "./Channel";
import Action from "./Action";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { AlignHorizontalCenter } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Content from "./Content";
import '@fontsource/montserrat/100.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/900.css';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    intent: "",
    label: "",
    action: "",
    channel: "",
    language: "",
    type: "",
    content_es: "",
    content_pt: "",
    content_en: "",
  });

  const FormTitles = ["LABEL", "CONTENIDO", "PARAMETROS"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Label formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Content formData={formData} setFormData={setFormData} />;
    } else {
      return <Action formData={formData} setFormData={setFormData} />;
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