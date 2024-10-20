import { 
  Card, CardProps,
  CardActions, CardActionsProps,
  CardHeader, CardHeaderProps,
  CardContent, CardContentProps,
  CardMedia, CardMediaProps
} from '@mui/material';

interface ICardProps extends CardProps {
  children?: React.ReactNode;
  props: any;
}

interface ICardActionsProps extends CardActionsProps {
  children?: React.ReactNode;
  props: any;
}

interface ICardHeaderProps extends CardHeaderProps {
  children?: React.ReactNode;
  props: any;
}

interface ICardContentProps extends CardContentProps {
  children?: React.ReactNode;
  props: any;
}

interface ICardMediaProps extends CardMediaProps {
  children?: React.ReactNode;
  props: any;
}

const CardComponent: React.FC<ICardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
}

const CardActionsComponent: React.FC<ICardActionsProps> = ({ children, ...props }) => {
  return <CardActions {...props}>{children}</CardActions>;
}

const CardContentComponent: React.FC<ICardContentProps> = ({ children, ...props }) => {
  return <CardContent {...props}>{children}</CardContent>;
}

const CardHeaderComponent: React.FC<ICardHeaderProps> = ({ children, ...props }) => {
  return <CardHeader {...props}>{children}</CardHeader>;
}

const CardMediaComponent: React.FC<ICardMediaProps> = ({ children, ...props }) => {
  return <CardMedia {...props}>{children}</CardMedia>;
}

export {
  CardComponent,
  CardActionsComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardMediaComponent
};
