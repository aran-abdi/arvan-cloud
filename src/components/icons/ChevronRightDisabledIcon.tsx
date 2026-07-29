import chevronRightDisabled from "@/assets/icons/chevron-right-disabled.svg";
import { Icon } from "./Icon";

type ChevronRightDisabledIconProps = { className?: string };

export function ChevronRightDisabledIcon({ className }: ChevronRightDisabledIconProps) {
  return <Icon src={chevronRightDisabled} width={5} height={9} className={className} />;
}
