import chevronLeftDefault from "@/assets/icons/chevron-left-default.svg";
import { Icon } from "./Icon";

type ChevronLeftDefaultIconProps = { className?: string };

export function ChevronLeftDefaultIcon({ className }: ChevronLeftDefaultIconProps) {
  return <Icon src={chevronLeftDefault} width={5} height={9} className={className} />;
}
