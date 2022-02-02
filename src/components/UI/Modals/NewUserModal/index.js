import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicModal from "../../common/BasicModal";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const defaultInputValues = {
  userId: "",
  email: "",
  phoneNumber: "",
};

const NewUserModal = ({ open, onClose, addNewUser }) => {
  const [values, setValues] = useState(defaultInputValues);

  const modalStyle = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      ".MuiFormControl-root": {
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

  const addUser = (data) => {
    addNewUser(data);
  };
  const handleChange = (value) => {
    setValues(value);
  };

  useEffect(() => {
    if (open) setValues(defaultInputValues);
  }, [open]);

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
        value={values.userId}
        onChange={(event) =>
          handleChange({ ...values, userId: event.target.value })
        }
      />
      <TextField
        placeholder="E-mail"
        name="email"
        label="E-mail"
        required
        {...register("email")}
        error={errors.email ? true : false}
        helperText={errors.email?.message}
        value={values.email}
        onChange={(event) =>
          handleChange({ ...values, email: event.target.value })
        }
      />
      <TextField
        placeholder="Phone number"
        name="phoneNumber"
        label="Phone number"
        required
        {...register("phoneNumber")}
        error={errors.phoneNumber ? true : false}
        helperText={errors.phoneNumber?.message}
        value={values.phoneNumber}
        onChange={(event) =>
          handleChange({ ...values, phoneNumber: event.target.value })
        }
      />
    </Box>
  );

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New user"
      subTitle="Duis mollis, est , nisi erat porttitor ligula"
      content={getContent()}
      onSubmit={handleSubmit(addUser)}
    ></BasicModal>
  );
};

export default NewUserModal;
