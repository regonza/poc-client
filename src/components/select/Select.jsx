import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/system";

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function FlightRules({ formData, setFormData }) {
  return (
    <Container>
      <FormControl margin="normal" fullWidth>
        <InputLabelStyled>FLIGHT RULE</InputLabelStyled>
        <Select
          id="flightRule"
          value={formData?.flightRule}
          label="FLIGHT RULE:"
          onChange={(event) =>
            setFormData({ ...formData, flightRule: event.target.value })}
        >
          <MenuItem value="V">V</MenuItem>
          <MenuItem value="I">I</MenuItem>
          <MenuItem value="Z">Z</MenuItem>
          <MenuItem value="Y">Y</MenuItem>
        </Select>
      </FormControl>
    </Container>

  );
}

export default FlightRules;
