import { Text , ITextProps } from "native-base";

interface TextProps extends ITextProps {
  children?: React.ReactNode;
  props: any;
}

const TextComponent: React.FC<TextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
}

export default TextComponent;
