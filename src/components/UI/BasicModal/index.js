import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import BasicButton from "../BasicButton";

const BasicModal = ({ open, onClose }) => {
  const validate = () => {};

  const modalStyle = {
    wrapper: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    },
    inputFields: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      // ".MuiBox-root": {
      //   marginBottom: "20px",
      // },
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
          New user
          {/* {title} */}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {/* {subTitle} */}
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Box sx={modalStyle.inputFields}>
          <Input placeholder="E-mail" />
          <Input placeholder="Phone number" />
          <Input placeholder="User ID" />
        </Box>
        <Box sx={modalStyle.buttons}>
          <BasicButton variant={"contained"} onClick={validate}>
            Submit
          </BasicButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
