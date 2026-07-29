import checkIcon from "@/assets/icons/check.svg";
import { CHECKBOX_ICON } from "@/constants";
import { Icon } from "./Icon";

type CheckIconProps = {
  className?: string;
};

export function CheckIcon({ className }: CheckIconProps) {
  return (
    <Icon
      src={checkIcon}
      width={CHECKBOX_ICON.check.width}
      height={CHECKBOX_ICON.check.height}
      className={className}
    />
  );
}
