import { TextField } from '@mui/material';

interface ITextFieldProps {}

const TextFieldComponent: React.FC<ITextFieldProps> = (props) => {
  return <TextField {...props} />;
}

export default TextFieldComponent;