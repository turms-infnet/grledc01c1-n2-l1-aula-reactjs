interface CardProps {
  children?: React.ReactNode;
  props: any;
}

const CardComponent: React.FC<CardProps> = ({ children, ...props }) => {
  return "Card";
}

export default CardComponent;
