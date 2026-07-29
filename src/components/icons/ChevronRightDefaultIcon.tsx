import chevronRightDefault from "@/assets/icons/chevron-right-default.svg";
import { Icon } from "./Icon";

type ChevronRightDefaultIconProps = { className?: string };

export function ChevronRightDefaultIcon({ className }: ChevronRightDefaultIconProps) {
  return <Icon src={chevronRightDefault} width={5} height={9} className={className} />;
}
