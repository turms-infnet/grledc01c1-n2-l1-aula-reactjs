import { Checkbox, ICheckboxProps } from "native-base";

interface CheckboxProps extends ICheckboxProps {
  children?: React.ReactNode;
  props: any;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({ children, ...props }) => {
  return <Checkbox {...props}>{children}</Checkbox>;
}

export default CheckboxComponent;
