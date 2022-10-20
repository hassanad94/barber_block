import Image from "next/image";

const NextJsImage = ({ photo, imageProps, wrapperProps }) => {
  const { width, height } = photo;
  var { src, alt, title, style, sizes, className, onClick } = imageProps;
  const { style: wrapperStyle, ...restWrapperProps } = wrapperProps ?? {};

  return (
    <div
      style={{
        width: style.width,
        padding: style.padding,
        marginBottom: style.marginBottom,
        ...wrapperStyle,
      }}
      {...restWrapperProps}
    >
      <Image
        src={src}
        alt={alt}
        title={title}
        sizes={sizes}
        width={width}
        height={height}
        className={className}
        onClick={onClick}
      />
    </div>
  );
};

export default NextJsImage;
