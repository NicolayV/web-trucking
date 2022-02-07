import { Grid } from "@mui/material";
import React, { useState } from "react";
import CarrierPersonalForm from "../../components/CarrierPersonalForm";
import CarrierVehicleForm from "../../components/CarrierVehicleForm";
import GridWrapper from "../../components/UI/common/GridWrapper";

const SignUpCarrier = () => {
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
        <CarrierVehicleForm addNewUser={addNewUser} />
        <CarrierPersonalForm addNewUser={addNewUser} />
      </Grid>
    </GridWrapper>
  );
};

export default SignUpCarrier;
