import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/system";

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


function WakeTurbulenceCat({ formData, setFormData }) {
  return (
    <Container>
      <FormControl margin="normal" fullWidth>
        <InputLabelStyled>WAKE TURBULENCE:</InputLabelStyled>
        <Select
          id="wakeTurbulenceCat"
          value={formData?.wakeTurbulenceCat}
          label="TYPE OF FLIGHT:"
          onChange={(event) =>
            setFormData({ ...formData, wakeTurbulenceCat: event.target.value })}
        >
          <MenuItem value="L">L</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="H">H</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}

export default WakeTurbulenceCat;
