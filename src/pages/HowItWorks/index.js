import React from "react";
import Grid from "@mui/material/Grid";
import BasicCard from "../../components/UI/common/BasicCard";
import ProgressStepper from "../../components/UI/common/ProgressStepper";
import GridWrapper from "../../components/UI/common/GridWrapper";

const HowItWorks = () => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  const stepDescription = ["Description 1", "Description 2", "Description 3"];

  const getContent = () => (
    <ProgressStepper steps={steps} stepDescription={stepDescription} />
  );

  return (
    <GridWrapper>
      <BasicCard header={"ProgressStepper"} content={getContent()} />
    </GridWrapper>
  );
};

export default HowItWorks;
