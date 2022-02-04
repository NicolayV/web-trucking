import React, { useEffect, useState } from "react";

import GridWrapper from "../../components/UI/common/GridWrapper";

import SignUpForm from "../../components/SignUpForm";

const SignUp = () => {
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
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "40px",
        }}
      >
        <BasicButton
          variant={"contained"}
          onClick={() => navigate("signupcustomer")}
          
        >
          Заказчик
        </BasicButton>
        <BasicButton variant={"contained"}>Перевозчик</BasicButton> */}
      <SignUpForm addNewUser={addNewUser} />
      {/* </Box> */}
    </GridWrapper>
  );
};

export default SignUp;
