import { Input , IInputProps } from "native-base";

interface InputProps extends IInputProps {
  props: any;
}

const InputComponent: React.FC<InputProps> = (props) => {
  return <Input {...props} />;
}

export default InputComponent;
