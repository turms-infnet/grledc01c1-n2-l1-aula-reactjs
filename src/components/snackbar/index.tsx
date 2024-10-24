import { Snackbar, SnackbarProps } from '@mui/material';

interface ISnackbarProps extends SnackbarProps{
  props: any;
}

const SnackbarComponent: React.FC<ISnackbarProps> = ({children, ...props}) => {
    return <Snackbar {...props}>{children}</Snackbar>
}

export default SnackbarComponent;