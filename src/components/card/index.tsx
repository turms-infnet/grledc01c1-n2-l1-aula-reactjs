import { 
  Card, CardProps,
} from '@mui/material';

interface ICardProps extends CardProps {
  children?: React.ReactNode;
  props: any;
}

const CardComponent: React.FC<ICardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
}

export default CardComponent;
