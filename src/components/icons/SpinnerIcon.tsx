import spinnerIcon from "@/assets/icons/spinner.svg";
import { Icon } from "./Icon";

type SpinnerIconProps = {
  className?: string;
};

export function SpinnerIcon({ className }: SpinnerIconProps) {
  return (
    <Icon
      src={spinnerIcon}
      width={20}
      height={20}
      className={className}
    />
  );
}
