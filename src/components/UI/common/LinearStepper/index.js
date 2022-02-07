import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BasicButton from "../BasicButton";
import { Typography } from "@mui/material";

const getSteps = () => [
  "Basic information",
  "Contact information",
  "Personal information",
  "Payment",
];

const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  const steps = getSteps();
  const getStepContent = (stepContent) => {
    switch (stepContent) {
      case 0:
        return "step 1";
      case 1:
        return "step 2";
      default:
        return "unknown step case";
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form>{getStepContent(activeStep)}</form>
      {activeStep === 4 ? (
        <Typography variant="h5" align="center" p={1}>
          Well done, form completed!
        </Typography>
      ) : (
        <>
          <BasicButton onClick={handleBack} disabled={activeStep === 0}>
            Back Step
          </BasicButton>
          <BasicButton onClick={handleNext}>
            {activeStep === 3 ? "Finish" : "Next Step"}
          </BasicButton>
        </>
      )}
    </div>
  );
};

export default LinearStepper;
