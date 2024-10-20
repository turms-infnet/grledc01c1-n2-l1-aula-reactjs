import { Button, ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {
  children?: React.ReactNode;
  props: any;
}

const ButtonComponent: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
}

export default ButtonComponent;
