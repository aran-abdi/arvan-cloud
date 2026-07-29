import Image, { type StaticImageData } from "next/image";
import type { ComponentPropsWithoutRef } from "react";

type IconProps = Omit<
  ComponentPropsWithoutRef<typeof Image>,
  "src" | "alt" | "width" | "height"
> & {
  src: StaticImageData;
  width: number;
  height: number;
};

export function Icon({ src, width, height, className, ...props }: IconProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt=""
      aria-hidden
      className={className}
      {...props}
    />
  );
}
