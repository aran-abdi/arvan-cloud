import circleCheckIcon from "@/assets/icons/circle-check.svg";
import { Icon } from "./Icon";

type CircleCheckIconProps = {
  className?: string;
};

export function CircleCheckIcon({ className }: CircleCheckIconProps) {
  return (
    <Icon
      src={circleCheckIcon}
      width={17}
      height={17}
      className={className}
    />
  );
}
