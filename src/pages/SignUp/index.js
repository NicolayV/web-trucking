import React, { useEffect, useState } from "react";

import GridWrapper from "../../components/UI/common/GridWrapper";

import SignInForm from "../../components/SignUpForm";

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
      <SignInForm addNewUser={addNewUser} />
    </GridWrapper>
  );
};

export default SignUp;
