import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import GridWrapper from "../../components/UI/common/GridWrapper";
import BasicButton from "../../components/UI/common/BasicButton";
import BasicCard from "../../components/UI/common/BasicCard";

const SignUp = () => {
  const navigate = useNavigate();

  const signupStyles = {
    display: "flex",
  };

  const getHeader = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          padding: "10px",

          color: "text.primary",
          fontSize: 34,
          fontWeight: "medium",
        }}
      >
        Регистрация
      </Box>
    );
  };

  const getContent = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              margin: "80px",
            }}
          >
            <BasicButton
              variant="contained"
              onClick={() => navigate("../signup/customer", { replace: true })}
            >
              Заказчик
            </BasicButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "80px",
            }}
          >
            <BasicButton
              variant="contained"
              onClick={() => navigate("../signup/carrier", { replace: true })}
            >
              Перевозчик
            </BasicButton>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <GridWrapper>
      <Grid container justifyContent="space-around">
        <BasicCard
          sx={{
            width: "600px",
          }}
          header={getHeader()}
          content={getContent()}
        />
      </Grid>
    </GridWrapper>
  );
};

export default SignUp;
