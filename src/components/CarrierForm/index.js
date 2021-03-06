import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Box, TextField } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";

import formStyle from "./styles";

import BasicCard from "../UI/common/BasicCard";
import BasicButton from "../UI/common/BasicButton";

const defaultInputValues = {
  login: "",
  fname: "",
  lname: "",
  phoneNumber: "",
  email: "",
  password: "",
  carrierType: "",
  carBrand: "",
  carModel: "",
  stateNumber: "",
  numberOfSeats: "",
  certificate: "",
  photos: "",
};

const getSteps = () => [
  "Personal information",
  "Contact information",
  "Vehicle information",
  "Other information",
];

const CarrierForm = ({ addNewUser }) => {
  const [formValues, setFormValues] = useState(defaultInputValues);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const addUser = (data) => addNewUser(data);

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };
  const handleBack = () => setActiveStep(activeStep - 1);
  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const stateNumberRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const nameRegExp = /^([^0-9]*)$/;

  // validationRules
  const validationSchema = Yup.object().shape({
    login: Yup.string()
      .required("Login is required")
      .min(6, "Login must be at least 6 characters"),
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
      .min(3, "password must be at least 3 characters")
      .max(6, "password must be no more 6 characters"),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password should Match!"
    ),

    carrierType: Yup.string().required("carrierType is required"),
    carBrand: Yup.string().required("carBrand is required"),
    carModel: Yup.string().required("carModel is required"),
    stateNumber: Yup.string()
      .required("stateNumber is required")
      .matches(stateNumberRegExp, "stateNumber is not valid"),
    numberOfSeats: Yup.string().required("numberOfSeats is required"),
    certificate: Yup.string().required("certificate is required"),
    photos: Yup.string().required("photos is required"),
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
    return <Box sx={formStyle.header}>Sign Up Carrier Form</Box>;
  };

  const getStepContent = (stepContent) => {
    switch (stepContent) {
      case 0:
        return (
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
          </Box>
        );
      case 1:
        return (
          <Box sx={formStyle.inputFields}>
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
          </Box>
        );
      case 2:
        return (
          <Box sx={formStyle.inputFields}>
            <TextField
              placeholder="carrierType"
              name="carrierType"
              label="carrierType"
              {...register("carrierType")}
              error={errors.carrierType ? true : false}
              helperText={errors.carrierType?.message}
              value={formValues.carrierType}
              onChange={handleChange}
            />
            <Box sx={formStyle.inputField}>
              <TextField
                fullWidth
                placeholder="carBrand"
                name="carBrand"
                label="carBrand"
                {...register("carBrand")}
                error={errors.carBrand ? true : false}
                helperText={errors.carBrand?.message}
                value={formValues.carBrand}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                placeholder="carModel"
                name="carModel"
                label="carModel"
                {...register("carModel")}
                error={errors.carModel ? true : false}
                helperText={errors.carModel?.message}
                value={formValues.carModel}
                onChange={handleChange}
              />
            </Box>
            <Box sx={formStyle.inputField}>
              <TextField
                fullWidth
                placeholder="stateNumber"
                name="stateNumber"
                label="stateNumber"
                {...register("stateNumber")}
                error={errors.stateNumber ? true : false}
                helperText={errors.stateNumber?.message}
                value={formValues.stateNumber}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                placeholder="numberOfSeats"
                name="numberOfSeats"
                label="numberOfSeats"
                {...register("numberOfSeats")}
                error={errors.numberOfSeats ? true : false}
                helperText={errors.numberOfSeats?.message}
                value={formValues.numberOfSeats}
                onChange={handleChange}
              />
            </Box>
          </Box>
        );
      case 3:
        return (
          <Box sx={formStyle.inputFields}>
            <TextField
              placeholder="certificate"
              name="certificate"
              label="certificate"
              {...register("certificate")}
              error={errors.certificate ? true : false}
              helperText={errors.certificate?.message}
              value={formValues.certificate}
              onChange={handleChange}
            />
            <TextField
              placeholder="photos"
              name="photos"
              label="photos"
              {...register("photos")}
              error={errors.photos ? true : false}
              helperText={errors.photos?.message}
              value={formValues.photos}
              onChange={handleChange}
            />
          </Box>
        );
      default:
        return "unknown step case";
    }
  };

  const getContent = () => (
    <>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                sx={{ display: "block" }}
                align="center"
                variant="caption"
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={step} {...stepProps}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <form onSubmit={handleSubmit(addUser)}>
        {/*  */}
        {getStepContent(activeStep)}

        {activeStep === steps.length ? (
          <Typography variant="h5" align="center" p={1}>
            Well done, form completed!
          </Typography>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <BasicButton
              sx={formStyle.buttons}
              disabled={activeStep === steps.length - 1 ? false : true}
              type="submit"
              variant="contained"
            >
              Submit
            </BasicButton>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <BasicButton onClick={handleBack} disabled={activeStep === 0}>
                Back Step
              </BasicButton>
              {isStepOptional(activeStep) && (
                <BasicButton onClick={handleSkip}>Skip</BasicButton>
              )}
              <BasicButton onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
              </BasicButton>
            </Box>
          </Box>
        )}
      </form>
    </>
  );

  return (
    <BasicCard
      sx={formStyle.card}
      header={getHeader()}
      content={getContent()}
    />
  );
};

export default CarrierForm;
