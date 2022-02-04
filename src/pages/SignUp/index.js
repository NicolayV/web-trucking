import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import GridWrapper from "../../components/UI/common/GridWrapper";
import BasicButton from "../../components/UI/common/BasicButton";

const SignUp = () => {
  const navigate = useNavigate();

  const handleNavigate = () =>
    navigate("../signup/customer", { replace: true });

  const signupStyles = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
  };

  return (
    <GridWrapper>
      <Box sx={signupStyles}>
        <BasicButton variant={"contained"} onClick={handleNavigate}>
          Заказчик
        </BasicButton>
        <BasicButton variant={"contained"}>Перевозчик</BasicButton>
      </Box>
    </GridWrapper>
  );
};

export default SignUp;
