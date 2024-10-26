import { Alert, AlertProps } from '@mui/material';

interface IAlertProps extends AlertProps {
  props: any;
}

const AlertComponent: React.FC<IAlertProps> = ({children, ...props}) => {
  return <Alert {...props}>{children}</Alert>;
}

export default AlertComponent;
