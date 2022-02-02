import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import BasicButton from "../BasicButton";

const steps = ["Step 1", "Step 2"];
const stepDescription = ["Description 1", "Description 2"];

const ProgressStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        <Typography>{stepDescription[activeStep]}</Typography>
        <BasicButton
          onClick={() => setActiveStep(activeStep - 1)}
          variant="contained"
        >
          Prev
        </BasicButton>
        <BasicButton
          onClick={() => setActiveStep(activeStep + 1)}
          variant="contained"
        >
          Next
        </BasicButton>
      </>
    </div>
  );
};

export default ProgressStepper;
