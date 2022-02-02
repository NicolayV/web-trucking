import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BasicButton from "../BasicButton";

const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {
  const modalStyle = {
    wrapper: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
    },
    buttons: {
      display: "flex",
      justifyContent: "end",
    },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle.wrapper}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{subTitle}</Typography>
        {content}
        <Box sx={modalStyle.buttons}>
          <BasicButton variant="contained" onClick={onSubmit}>
            Submit
          </BasicButton>
          <BasicButton onClick={onClose}>Cancel</BasicButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
