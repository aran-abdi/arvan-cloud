type MenuIconProps = {
  className?: string;
  closeBadge?: boolean;
};

export function MenuIcon({ className, closeBadge = false }: MenuIconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path
        d="M3 5H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 10H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 15H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {closeBadge ? (
        <g>
          <circle cx="14.75" cy="5.25" r="5.25" fill="var(--neutral-bg1-default)" />
          <path
            d="M12.25 2.75L17.25 7.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M17.25 2.75L12.25 7.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      ) : null}
    </svg>
  );
}
