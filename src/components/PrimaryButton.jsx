import * as React from "react";
import Button from "@mui/material/Button";

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
        borderRadius: 'none',
        fontFamily: "Montserrat",
        fontSize: "22px", 
      }}
    >
      {title}
    </Button>
  );
}

export default PrimaryButton;