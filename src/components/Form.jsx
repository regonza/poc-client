import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { OutlinedInput } from "@mui/material";


function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    aircraftId: "",
    flightRule: "",
    typeOfFlight: "",
    numberOfAcft: "",
    typeOfAircraft: "",
    wakeTurbulenceCat: "",
    equipment: "",
    departureAerodrome: "",
    cruisingSpeed: "",
    otherInformation: "",
    endurance: "",
    survivalEquip: "",
    jackets: "",
    dinghies: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '50vh' }}
    >
      <Grid item xs={12}>
        <div className="form">
          <div className="progressbar">
            <div
              style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
            ></div>
          </div>
          <div className="form-container">
            <div className="header">
              <h1>{FormTitles[page]}</h1>
            </div>

            <div className="body">
              {PageDisplay()}
            </div>

            <div className="footer">
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-evenly"
                sx={{ mt: 3, ml: 5, p: 3 }}
              >
                <SecondaryButton
                  variant="outlined"
                  disabled={page == 0}
                  title="←"
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
            </div>
          </div>
        </div>
      </Grid>
    </Grid>

  );
}

export default Form;
