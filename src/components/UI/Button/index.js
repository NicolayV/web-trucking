import { Button } from "@mui/material";
import React from "react";

const Button = ({
  color,
  children,
  disabled,
  size,
  variant,
  type,
  sx,
  ...props
}) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      type={type}
      sx={sx}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Button;
