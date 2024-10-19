import { Button, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps {
  children?: React.ReactNode;
  props: any;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
}

export default ButtonComponent;
