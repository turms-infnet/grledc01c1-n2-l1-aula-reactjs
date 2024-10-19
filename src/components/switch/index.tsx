import { Switch , ISwitchProps } from "native-base";

interface SwitchProps extends ISwitchProps {
  props: any;
}

const SwitchComponent: React.FC<SwitchProps> = (props) => {
  return <Switch {...props} />;
}

export default SwitchComponent;
