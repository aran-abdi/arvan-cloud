import chevronLeftDisabled from "@/assets/icons/chevron-left-disabled.svg";
import { Icon } from "./Icon";

type ChevronLeftDisabledIconProps = { className?: string };

export function ChevronLeftDisabledIcon({ className }: ChevronLeftDisabledIconProps) {
  return <Icon src={chevronLeftDisabled} width={5} height={9} className={className} />;
}
