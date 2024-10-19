interface GridProps {
  children?: React.ReactNode;
  props: any;
}

const GridComponent: React.FC<GridProps> = ({ children, ...props }) => {
  return "Grid";
}

export default GridComponent;
