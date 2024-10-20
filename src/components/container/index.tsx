import { Container, ContainerProps } from '@mui/material';

interface IContainerProps extends ContainerProps {
  children?: React.ReactNode;
  props: any;
}

const ContainerComponent: React.FC<IContainerProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
}

export default ContainerComponent;
