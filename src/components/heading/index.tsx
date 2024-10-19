import { Heading , IHeadingProps } from "native-base";

interface HeadingProps extends IHeadingProps {
  children?: React.ReactNode;
  props: any;
}

const HeadingComponent: React.FC<HeadingProps> = ({ children, ...props }) => {
  return <Heading {...props}>{children}</Heading>;
}

export default HeadingComponent;
