import React, { useState } from "react";
import BasicCard from "../UI/common/BasicCard";
import { Box, TextField } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import formStyle from "./styles";
import BasicButton from "../UI/common/BasicButton";

const defaultInputValues = {
  carrierType: "",
  carBrand: "",
  carModel: "",
  stateNumber: "",
  numberOfSeats: "",
  certificate: "",
  photos: "",
};

const CarrierVehicleForm = ({ addNewUser }) => {
  const [values, setValues] = useState(defaultInputValues);

  const handleChange = (value) => {
    setValues(value);
  };

  const addUser = (data) => {
    addNewUser(data);
  };

  const stateNumberRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // validationRules
  const validationSchema = Yup.object().shape({
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
  });

  const getHeader = () => {
    return <Box sx={formStyle.header}>Sign Up Carrier Vehicle Form</Box>;
  };

  const getContent = () => (
    <form onSubmit={handleSubmit(addUser)}>
      <Box sx={formStyle.inputFields}>
        <TextField
          placeholder="carrierType"
          name="carrierType"
          label="carrierType"
          required
          {...register("carrierType")}
          error={errors.carrierType ? true : false}
          helperText={errors.carrierType?.message}
          value={values.carrierType}
          onChange={(event) =>
            handleChange({ ...values, carrierType: event.target.value })
          }
        />
        <Box sx={formStyle.inputField}>
          <TextField
            fullWidth
            placeholder="carBrand"
            name="carBrand"
            label="carBrand"
            required
            {...register("carBrand")}
            error={errors.carBrand ? true : false}
            helperText={errors.carBrand?.message}
            value={values.carBrand}
            onChange={(event) =>
              handleChange({ ...values, carBrand: event.target.value })
            }
          />
          <TextField
            fullWidth
            placeholder="carModel"
            name="carModel"
            label="carModel"
            required
            {...register("carModel")}
            error={errors.carModel ? true : false}
            helperText={errors.carModel?.message}
            value={values.carModel}
            onChange={(event) =>
              handleChange({ ...values, carModel: event.target.value })
            }
          />
        </Box>
        <Box sx={formStyle.inputField}>
          <TextField
            fullWidth
            placeholder="stateNumber"
            name="stateNumber"
            label="stateNumber"
            required
            {...register("stateNumber")}
            error={errors.stateNumber ? true : false}
            helperText={errors.stateNumber?.message}
            value={values.stateNumber}
            onChange={(event) =>
              handleChange({ ...values, stateNumber: event.target.value })
            }
          />
          <TextField
            fullWidth
            placeholder="numberOfSeats"
            name="numberOfSeats"
            label="numberOfSeats"
            required
            {...register("numberOfSeats")}
            error={errors.numberOfSeats ? true : false}
            helperText={errors.numberOfSeats?.message}
            value={values.numberOfSeats}
            onChange={(event) =>
              handleChange({ ...values, numberOfSeats: event.target.value })
            }
          />
        </Box>
        <TextField
          placeholder="certificate"
          name="certificate"
          label="certificate"
          required
          {...register("certificate")}
          error={errors.certificate ? true : false}
          helperText={errors.certificate?.message}
          value={values.certificate}
          onChange={(event) =>
            handleChange({ ...values, certificate: event.target.value })
          }
        />
        <TextField
          placeholder="photos"
          name="photos"
          label="photos"
          required
          {...register("photos")}
          error={errors.photos ? true : false}
          helperText={errors.photos?.message}
          value={values.photos}
          onChange={(event) =>
            handleChange({ ...values, photos: event.target.value })
          }
        />

        <Box sx={formStyle.buttons}>
          <BasicButton type="submit" variant="contained">
            Submit
          </BasicButton>
        </Box>
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

export default CarrierVehicleForm;
