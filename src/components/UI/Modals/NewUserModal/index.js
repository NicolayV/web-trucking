import { Box, TextField } from "@mui/material";
import React from "react";
import BasicModal from "../../common/BasicModal";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const NewUserModal = ({ open, onClose }) => {
  const modalStyle = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      ".MuiInput-root": {
        marginBottom: "20px",
      },
    },
    buttons: {
      display: "flex",
      justifyContent: "end",
    },
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // validationRules
  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required("User ID is required")
      .min(6, "User ID must be at least 6 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid."),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const addUser = (data) => console.log(data);

  const getContent = () => (
    <Box sx={modalStyle.inputFields}>
      <TextField
        placeholder="User ID"
        name="userId"
        label="User ID"
        required
        {...register("userId")}
        error={errors.userId ? true : false}
        helperText={errors.userId?.message}
      />
      <TextField
        placeholder="E-mail"
        name="email"
        label="E-mail"
        required
        {...register("email")}
        error={errors.email ? true : false}
        helperText={errors.email?.message}
      />
      <TextField
        placeholder="Phone number"
        name="phoneNumber"
        label="Phone number"
        required
        {...register("phoneNumber")}
        error={errors.phoneNumber ? true : false}
        helperText={errors.phoneNumber?.message}
      />
    </Box>
  );

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title={"New user"}
      subTitle={"  Duis mollis, est , nisi erat porttitor ligula."}
      content={getContent()}
      onSubmit={handleSubmit(addUser)}
      validate={() => {}}
    ></BasicModal>
  );
};

export default NewUserModal;
