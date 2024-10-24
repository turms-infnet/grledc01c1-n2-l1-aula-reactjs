import { IconButton , IconButtonProps } from '@mui/material';

interface IIconButtonProps extends IconButtonProps {
  props: any;
}

const IconButtonComponent: React.FC<IIconButtonProps> = (props) => {
  return <IconButton {...props}/>;
}

export default IconButtonComponent;
