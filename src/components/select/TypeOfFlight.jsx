import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/system";

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function TypeOfFlight({ formData, setFormData }) {
  return (
    <Container>
      <FormControl margin="normal" fullWidth>
        <InputLabelStyled>TYPE FLIGHT</InputLabelStyled>
        <Select
          id="typeOfFlight"
          value={formData?.typeOfFlight}
          label="TYPE OF FLIGHT:"
          onChange={(event) =>
            setFormData({ ...formData, typeOfFlight: event.target.value })}
        >
          <MenuItem value="G">G</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="N">N</MenuItem>
          <MenuItem value="S">S</MenuItem>
        </Select>
      </FormControl>
    </Container>

  );
}

export default TypeOfFlight;
