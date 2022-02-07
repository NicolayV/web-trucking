import React, { useState } from "react";
import BasicCard from "../UI/common/BasicCard";
import { Box, TextField } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import formStyle from "./styles";
import BasicButton from "../UI/common/BasicButton";

const defaultInputValues = {
  login: "",
  fullName: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const CarrierPersonalForm = ({ addNewUser }) => {
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
    login: Yup.string()
      .required("Login is required")
      .min(6, "Login must be at least 6 characters"),
    fullName: Yup.string()
      .required("fullName is required")
      .min(6, "fullName must be at least 6 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid."),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    password: Yup.string()
      .required("password is required")
      .min(3, "password must be at least 3 characters")
      .max(6, "password must be no more 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const getHeader = () => {
    return <Box sx={formStyle.header}>Sign Up Carrier Personal Form</Box>;
  };

  const getContent = () => (
    <Box sx={formStyle.inputFields}>
      <TextField
        placeholder="login"
        name="login"
        label="login"
        required
        {...register("login")}
        error={errors.login ? true : false}
        helperText={errors.login?.message}
        value={values.login}
        onChange={(event) =>
          handleChange({ ...values, login: event.target.value })
        }
      />
      <TextField
        placeholder="fullName"
        name="fullName"
        label="fullName"
        required
        {...register("fullName")}
        error={errors.fullName ? true : false}
        helperText={errors.fullName?.message}
        value={values.fullName}
        onChange={(event) =>
          handleChange({ ...values, fullName: event.target.value })
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
      <TextField
        placeholder="password"
        name="password"
        label="password"
        required
        {...register("password")}
        error={errors.password ? true : false}
        helperText={errors.password?.message}
        value={values.password}
        onChange={(event) =>
          handleChange({ ...values, password: event.target.value })
        }
      />
      <Box sx={formStyle.buttons}>
        <BasicButton type="submit" variant="contained">
          Submit
        </BasicButton>
      </Box>
    </Box>
  );

  return <BasicCard header={getHeader()} content={getContent()} />;
};

export default CarrierPersonalForm;
