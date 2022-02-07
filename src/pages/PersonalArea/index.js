import React, { useState } from "react";
import BasicSnackbar from "../../components/UI/common/BasicSnackbar";
import BasicButton from "../../components/UI/common/BasicButton";
import GridWrapper from "../../components/UI/common/GridWrapper";

const PersonalArea = () => {
  const severity = "success";
  const message = "This is a success message!";
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <GridWrapper>
      <BasicButton variant="contained" onClick={handleClick}>
        Open success snackbar
      </BasicButton>
      <BasicSnackbar
        open={open}
        onClose={handleClose}
        severity={severity}
        message={message}
      />
    </GridWrapper>
  );
};

export default PersonalArea;
