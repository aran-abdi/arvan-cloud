import indeterminateIcon from "@/assets/icons/indeterminate.svg";
import { CHECKBOX_ICON } from "@/constants";
import { Icon } from "./Icon";

type IndeterminateIconProps = {
  className?: string;
};

export function IndeterminateIcon({ className }: IndeterminateIconProps) {
  return (
    <Icon
      src={indeterminateIcon}
      width={CHECKBOX_ICON.indeterminate.width}
      height={CHECKBOX_ICON.indeterminate.height}
      className={className}
    />
  );
}
