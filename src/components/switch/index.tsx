import { Switch } from '@mui/material';

interface ISwitchProps {}

const SwitchComponent: React.FC<ISwitchProps> = (props) => {
  return <Switch {...props} />;
}

export default SwitchComponent;
