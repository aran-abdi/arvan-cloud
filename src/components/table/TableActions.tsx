"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { DotsIcon } from "@/components/icons";
import { TABLE } from "@/constants/table";
import { cn } from "@/lib/cn";
import styles from "./Table.module.css";

export type TableActionsProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children: ReactNode;
  label?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type MenuCoords = {
  top: number;
  left: number;
};

function isTriggerVisible(trigger: HTMLElement): boolean {
  if (typeof trigger.checkVisibility === "function") {
    return trigger.checkVisibility({
      checkOpacity: false,
      checkVisibilityCSS: true,
    });
  }

  let node: HTMLElement | null = trigger;
  while (node) {
    if (getComputedStyle(node).display === "none") return false;
    node = node.parentElement;
  }
  return true;
}

export function TableActions({
  children,
  className,
  label = "Row actions",
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  ...divProps
}: TableActionsProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : uncontrolledOpen;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const [coords, setCoords] = useState<MenuCoords | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const close = useCallback(() => setOpen(false), [setOpen]);
  const toggle = useCallback(() => setOpen(!open), [setOpen, open]);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    // Hidden triggers (e.g. display:none responsive twin) must not portal a
    // menu or attach outside-click listeners that steal the visible twin's clicks.
    if (!isTriggerVisible(trigger)) {
      setCoords(null);
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const menuWidth = TABLE.actionsMenuWidth;
    const menuHeight = TABLE.actionsMenuHeight;
    const gap = TABLE.actionsMenuGap;
    const edge = TABLE.actionsMenuEdge;

    const tableArea =
      trigger.closest("table")?.parentElement?.getBoundingClientRect() ??
      ({
        top: edge,
        bottom: window.innerHeight - edge,
        left: edge,
        right: window.innerWidth - edge,
      } as DOMRect);

    const areaTop = Math.max(edge, tableArea.top);
    const areaBottom = Math.min(window.innerHeight - edge, tableArea.bottom);
    const areaLeft = Math.max(edge, tableArea.left);
    const areaRight = Math.min(window.innerWidth - edge, tableArea.right);

    const spaceBelow = areaBottom - rect.bottom - gap;
    const spaceAbove = rect.top - areaTop - gap;
    const openAbove =
      spaceBelow < menuHeight && spaceAbove >= spaceBelow;

    let top = openAbove
      ? rect.top - gap - menuHeight
      : rect.bottom + gap;

    top = Math.min(Math.max(top, areaTop), areaBottom - menuHeight);

    let left = rect.right - menuWidth;
    left = Math.min(Math.max(left, areaLeft), areaRight - menuWidth);

    setCoords({ top, left });
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      setCoords(null);
      return;
    }
    updatePosition();
  }, [open, updatePosition]);

  const menuActive = open && coords !== null;

  useEffect(() => {
    if (!menuActive) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (rootRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onReposition = () => updatePosition();

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("scroll", onReposition, true);
    };
  }, [menuActive, close, updatePosition]);

  const menuItems = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const el = child as ReactElement<{ style?: CSSProperties }>;
    return cloneElement(el, {
      style: { width: "100%", ...el.props.style },
    });
  });

  const menu =
    mounted && open && coords
      ? createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            className={styles.actionsMenu}
            style={{ top: coords.top, left: coords.left }}
            onClick={close}
          >
            {menuItems}
          </div>,
          document.body
        )
      : null;

  return (
    <div
      ref={rootRef}
      className={cn(styles.actions, className)}
      {...divProps}
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.actionsTrigger}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={toggle}
      >
        <DotsIcon />
      </button>
      {menu}
    </div>
  );
}
