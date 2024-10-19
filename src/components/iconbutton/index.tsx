import { IconButton , IIconButtonProps } from "native-base";

interface IconButtonProps extends IIconButtonProps {
  props: any;
}

const IconButtonComponent: React.FC<IconButtonProps> = (props) => {
  return <IconButton {...props}/>;
}

export default IconButtonComponent;
