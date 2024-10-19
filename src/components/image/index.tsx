import { Image , IImageProps } from "native-base";

interface ImagePropsProps extends IImageProps {
  props: any;
}

const ImageComponent: React.FC<ImagePropsProps> = (props) => {
  return <Image {...props} />;
}

export default ImageComponent;
