import React, { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import GridWrapper from "../../components/UI/common/GridWrapper";
import { CssBaseline } from "@mui/material";
import CarrierForm from "../../components/CarrierForm";

const Feedback = () => {
  const [values, setValues] = useState("");
  console.log(values);
  const handleChange = (value) => setValues(value);
  const addNewUser = (data) => handleChange(data);

  return (
    <GridWrapper>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={4}>
          <CarrierForm addNewUser={addNewUser} />
        </Paper>
      </Container>
    </GridWrapper>
  );
};

export default Feedback;
