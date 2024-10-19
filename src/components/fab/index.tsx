import { Fab, IFabProps } from 'native-base';
interface FabProps extends IFabProps {
  props: any;
}

const FabComponent: React.FC<FabProps> = (props) => {
  return <Fab {...props} />;
}

export default FabComponent;
