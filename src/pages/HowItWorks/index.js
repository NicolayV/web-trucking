import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import BasicCard from "../../components/UI/common/BasicCard";
import ProgressStepper from "../../components/UI/common/ProgressStepper";

const HowItWorks = () => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  const stepDescription = ["Description 1", "Description 2", "Description 3"];

  const getContent = () => (
    <ProgressStepper steps={steps} stepDescription={stepDescription} />
  );

  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "#eaeff1",
        padding: "48px 32px",
        minHeight: "calc(100vh - 166px)",
        position: "relative",
      }}
    >
      <BasicCard header={"ProgressStepper"} content={getContent()} />

      <Button variant="contained">HowItWorks</Button>
    </Grid>
  );
};

export default HowItWorks;
