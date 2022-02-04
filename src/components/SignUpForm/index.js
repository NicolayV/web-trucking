import React, { useEffect, useState } from "react";
import BasicCard from "../UI/common/BasicCard";
import { Box, TextField } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import BasicButton from "../../components/UI/common/BasicButton";

const defaultInputValues = {
  userId: "",
  email: "",
  phoneNumber: "",
};

const SignInForm = ({ addNewUser }) => {
  const [values, setValues] = useState(defaultInputValues);

  const handleChange = (value) => {
    setValues(value);
  };

  const addUser = (data) => {
    addNewUser(data);
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

  const getHeader = () => {
    return <h1>Sign In Form</h1>;
  };

  const getContent = () => (
    <Box>
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
      <BasicButton variant="contained" onClick={handleSubmit(addUser)}>
        Submit
      </BasicButton>
    </Box>
  );

  return <BasicCard header={getHeader()} content={getContent()} />;
};

export default SignInForm;
