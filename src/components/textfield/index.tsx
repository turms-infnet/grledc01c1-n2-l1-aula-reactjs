import { TextField } from '@mui/material';

interface ITextFieldProps{
  variant?: "filled" | "outlined" | "standard";
  className?: "";
  mask?: string
}

const TextFieldComponent: React.FC<ITextFieldProps> = (props) => {
  const { variant = "outlined" } = props;

  return <TextField
            className={`general-textfield ${props.className ? props.className : ""}`}
            variant={variant}
            {...props} />
}

export default TextFieldComponent;