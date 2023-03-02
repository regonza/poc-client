import * as React from "react";
import Button from "@mui/material/Button";
import { ArrowBackIosNew } from "@mui/icons-material";

function PrimaryButton({ title, onClick, disabled }, ) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      sx={{
        background:'#12b9ff',
        color:'#ffff',
        width: '50vw',
        textTransform: "none",
        height: '10vh',
      }}
    >
      {title}
    </Button>
  );
}

function SecondaryButton({ onClick, disabled },) {
  return (
    <Button variant="outlined"
      onClick={onClick}
      disabled={disabled}
      title="←"
      sx={{
        background: '#1779a1',
        color: '#ffff',
        outline:'none',
        border:'none',
        width: '10vw',
        textTransform: "none",
        height: '10vh',
        borderRadius: 3,
      }}>
        <ArrowBackIosNew fontSize="large" />
      </Button>
  );
}
export {PrimaryButton, SecondaryButton};
export default {PrimaryButton, SecondaryButton};