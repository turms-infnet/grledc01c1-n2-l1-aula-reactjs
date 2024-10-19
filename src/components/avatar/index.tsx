import { Avatar, IAvatarProps } from "native-base";

interface AvatarProps extends IAvatarProps {
  children?: React.ReactNode;
  props: any;
}

const AvatarComponent: React.FC<AvatarProps> = ({ children, ...props }) => {
  return <Avatar {...props}>{children}</Avatar>;
}

export default AvatarComponent;
