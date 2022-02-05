import React, { useState } from "react";
import BasicCard from "../UI/common/BasicCard";
import { Box, TextField } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import formStyle from "./styles";
import BasicButton from "../../components/UI/common/BasicButton";

const defaultInputValues = {
  login: "",
  fname: "",
  lname: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
  city: "",
};

const SignUpForm = ({ addNewUser }) => {
  const [formValues, setFormValues] = useState(defaultInputValues);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const addUser = (data) => {
    addNewUser(data);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const nameRegExp = /^([^0-9]*)$/;

  const validationSchema = Yup.object().shape({
    login: Yup.string()
      .required("Login is required")
      .min(4, "Login must be at least 4 characters"),
    fname: Yup.string()
      .required("first name is required")
      .matches(nameRegExp, "First name should not contain numbers"),
    lname: Yup.string()
      .required("last name is required")
      .matches(nameRegExp, "Last name should not contain numbers"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid."),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    password: Yup.string()
      .required("password is required")
      .min(4, "password must be at least 4 characters")
      .max(6, "password must be no more 6 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password should Match!"
    ),
    city: Yup.string().required("City is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  const getHeader = () => {
    return (
      <>
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <Box sx={formStyle.header}>Sign Up Form</Box>
      </>
    );
  };

  const getContent = () => (
    <form onSubmit={handleSubmit(addUser)}>
      <Box sx={formStyle.inputFields}>
        <TextField
          placeholder="login"
          name="login"
          label="login"
          {...register("login")}
          error={errors.login ? true : false}
          helperText={errors.login?.message}
          value={formValues.login}
          onChange={handleChange}
        />
        <TextField
          placeholder="first name"
          name="fname"
          label="firs name"
          {...register("fname")}
          error={errors.fname ? true : false}
          helperText={errors.fname?.message}
          value={formValues.fname}
          onChange={handleChange}
        />
        <TextField
          placeholder="last name"
          name="lname"
          label="last name"
          {...register("lname")}
          error={errors.lname ? true : false}
          helperText={errors.lname?.message}
          value={formValues.lname}
          onChange={handleChange}
        />
        <TextField
          placeholder="E-mail"
          name="email"
          label="E-mail"
          {...register("email")}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          value={formValues.email}
          onChange={handleChange}
        />
        <TextField
          placeholder="Phone number"
          name="phoneNumber"
          label="Phone number"
          {...register("phoneNumber")}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber?.message}
          value={formValues.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          placeholder="password"
          name="password"
          label="password"
          {...register("password")}
          error={errors.password ? true : false}
          helperText={errors.password?.message}
          value={formValues.password}
          onChange={handleChange}
        />
        <TextField
          placeholder="confirmPassword"
          name="confirmPassword"
          label="confirmPassword"
          {...register("confirmPassword")}
          error={errors.confirmPassword ? true : false}
          helperText={errors.confirmPassword?.message}
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        <TextField
          placeholder="city"
          name="city"
          label="city"
          {...register("city")}
          error={errors.city ? true : false}
          helperText={errors.city?.message}
          value={formValues.city}
          onChange={handleChange}
        />
        <BasicButton type="submit" variant="contained">
          Submit
        </BasicButton>
      </Box>
    </form>
  );

  return (
    <BasicCard
      sx={formStyle.card}
      header={getHeader()}
      content={getContent()}
    />
  );
};

export default SignUpForm;
