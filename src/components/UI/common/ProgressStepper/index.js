import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import BasicButton from "../BasicButton";

const steps = ["Step 1", "Step 2", "Step 3"];
const stepDescription = ["Description 1", "Description 2", "Description 3"];

const ProgressStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompeted] = useState({});

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;
  const allStepsCompleted = completedSteps === totalSteps;

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompeted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompeted({});
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step} completed={completed[index]}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted ? (
          <>
            <Typography>All steps completed</Typography>
            <BasicButton variant="contained" onClick={handleReset}>
              Reset
            </BasicButton>
          </>
        ) : (
          <>
            <Typography>{stepDescription[activeStep]}</Typography>
            <BasicButton
              onClick={handleBack}
              variant="contained"
              disabled={activeStep === 0}
            >
              Prev
            </BasicButton>
            <BasicButton onClick={handleNext} variant="contained">
              Next
            </BasicButton>
          </>
        )}
      </div>
    </div>
  );
};

export default ProgressStepper;
