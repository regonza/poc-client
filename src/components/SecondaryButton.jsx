import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from '@mui/joy/IconButton';
import { ArrowBackIosNew } from "@mui/icons-material";

function SecondaryButton({ title, onClick, disabled },) {
  return (
    <IconButton variant="outlined"
      onClick={onClick}
      disabled={disabled}
      sx={{
        background: '#1779a1',
        color: '#ffff',
        outline:'none',
        border:'none',
        width: '10vw',
        textTransform: "none",
        height: '10vh',
        borderRadius: 3,
        fontFamily: "Montserrat",
        fontSize: "22px",
      }}>
        <ArrowBackIosNew fontSize="large" />
      </IconButton>
  );
}

export default SecondaryButton;