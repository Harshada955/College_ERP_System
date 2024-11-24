import React from "react";
import { Button as MuiButton } from "@mui/material";
const Button = (props) => {
  const { onClick = () => {}, customStyle, variant, label, disable=false } = props;
  return (
    <div>
      <MuiButton variant="filled" onClick={onClick} sx={customStyle} disabled={disable}>
        {label}
      </MuiButton>
    </div>
  );
};

export default Button;
