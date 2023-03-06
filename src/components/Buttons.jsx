import * as React from "react";
import Button from "@mui/material/Button";
import { ArrowBackIosNew } from "@mui/icons-material";

function PrimaryButton({ title, onClick, disabled }, ) {
  return (
    <div className="button-primary">
    <Button
    variant="outlined"
      onClick={onClick}
      disabled={disabled}
      style={{

        borderradius: "16px",
        background: "rgba(0, 166, 255, 0.2)",
        boxshadow:" 0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropfilter: "blur(5.9px)",
        webkitbackdropfilter: "blur(5.9px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
      }}
      sx={{
        color:'#ffff',
        width: '50vw',
        textTransform: "none",
        height: '10vh',
        backdropfilter: "blur(16px) saturate(180%)",
        webkitbackdropfilter: "blur(16px) saturate(180%)",
        backgroundcolor: "rgba(17, 25, 40, 0.75)",
        borderradius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      {title}
    </Button>
    </div>
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
        <ArrowBackIosNew  />
      </Button>
  );
}
export {PrimaryButton, SecondaryButton};
export default {PrimaryButton, SecondaryButton};