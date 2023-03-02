import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {PrimaryButton, SecondaryButton} from "./Buttons";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Label from './Label';
import Channel from "./Channel";
import Action from "./Action";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
        <Grid item xs={12}>
          <Item>
            <h1>{FormTitles[page]}</h1>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>{PageDisplay()}</Item>
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
                  }}
                />
                <PrimaryButton
                  title={page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      alert("FORM SUBMITTED");
                      console.log(formData);
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                />
              </Stack>
      </Grid>
  );
}

export default Form;