import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box, Typography } from "@mui/material";
import BasicButton from "../BasicButton";

const ProgressStepper = ({ steps, stepDescription }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompeted] = useState({});

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;
  const allStepsCompleted = completedSteps === totalSteps;

  // console.log(
  //   totalSteps,
  //   "totalSteps",
  //   completedSteps,
  //   "completedSteps",
  //   activeStep,
  //   "activeStep"
  // );
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
    <Box sx={{ width: "100%" }}>
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
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <BasicButton variant="contained" onClick={handleReset}>
                Reset
              </BasicButton>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {stepDescription[activeStep]}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <BasicButton
                onClick={handleBack}
                variant="contained"
                disabled={activeStep === 0}
                sx={{ mr: 1 }}
              >
                Prev
              </BasicButton>
              <Box sx={{ żflex: "1 1 auto" }} />

              <BasicButton onClick={handleNext} variant="contained">
                {completedSteps === totalSteps - 1 ? "Finish" : "Next"}
              </BasicButton>
            </Box>
          </>
        )}
      </div>
    </Box>
  );
};

export default ProgressStepper;
