import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";
const Button = (props) => {
  const {
    onClick = () => {},
    customStyle,
    variant,
    label,
    disabled = false,
  } = props;
  return (
    <div>
      <MuiButton
        variant={variant}
        onClick={onClick}
        sx={customStyle}
        disabled={disabled}
      >
        {label}
      </MuiButton>
    </div>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  customStyle: PropTypes.object,
  variant: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  customStyle: {},
  variant: "contained",
  label: "",
  disabled: false,
};
export default Button;
