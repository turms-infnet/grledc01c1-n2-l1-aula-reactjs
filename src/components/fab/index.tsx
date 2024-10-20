import { Fab, FabProps } from '@mui/material';

interface IFabProps extends FabProps {
  children?: React.ReactNode;
  props: any;
}

const FabComponent: React.FC<IFabProps> = ({children, ...props}) => {
  return <Fab {...props}>{children}</Fab>;
}

export default FabComponent;
