import { Grid } from "@mui/material";
import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm";
import GridWrapper from "../../components/UI/common/GridWrapper";

const SignUpCustomer = () => {
  const [values, setValues] = useState("");
  console.log(values);

  const handleChange = (value) => {
    setValues(value);
  };

  const addNewUser = (data) => {
    handleChange(data);
  };

  return (
    <GridWrapper>
      <Grid container justifyContent="space-around">
        <SignUpForm addNewUser={addNewUser} />
      </Grid>
    </GridWrapper>
  );
};

export default SignUpCustomer;
