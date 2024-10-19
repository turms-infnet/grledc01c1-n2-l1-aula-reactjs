interface TabProps {
  children?: React.ReactNode;
  props: any;
}

const TabComponent: React.FC<TabProps> = ({ children, ...props }) => {
  return "Tab";
}

export default TabComponent;
