import { Select , ISelectProps } from "native-base";

interface SelectProps extends ISelectProps {
  props: any,
  items: any;
}

const SelectComponent: React.FC<SelectProps> = (props) => {
  return    <Select {...props}>
                { props?.items.map((index: number, item: any) => <Select.Item id={index} {...item.props} />)}
            </Select>;
}

export default SelectComponent;
