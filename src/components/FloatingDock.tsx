"use client";

// Adapted from Aceternity UI's Floating Dock (via 21st.dev):
// items may navigate (href) or act (onClick), and magnification is skipped
// for users who prefer reduced motion.
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon } from "./icons";

export interface DockItem {
  /** Stable identity — used as the React key so dynamic titles don't remount items. */
  id: string;
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

export function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
}

function DockItemShell({
  item,
  className,
  children,
  onFocus,
  onBlur,
}: {
  item: DockItem;
  className?: string;
  children: React.ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
}) {
  if (item.href) {
    return (
      <a
        href={item.href}
        aria-label={item.title}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className={className}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      aria-label={item.title}
      onClick={item.onClick}
      className={className}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
}

function FloatingDockMobile({ items, className }: { items: DockItem[]; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn("relative block md:hidden", className)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            id="dock-mobile-menu"
            layoutId="dock-mobile-nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col items-center gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <DockItemShell
                  item={item}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink-muted"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </DockItemShell>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="dock-mobile-menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface"
      >
        <MenuIcon className="h-5 w-5 text-ink-muted" />
      </button>
    </div>
  );
}

function FloatingDockDesktop({ items, className }: { items: DockItem[]; className?: string }) {
  const mouseX = useMotionValue(Infinity);
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      onMouseMove={(e) => !reduceMotion && mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl border border-line bg-surface/85 px-4 pb-3 backdrop-blur-md md:flex",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.id} item={item} />
      ))}
    </motion.div>
  );
}

function IconContainer({ mouseX, item }: { mouseX: MotionValue; item: DockItem }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 36, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 36, 20]);

  const spring = { mass: 0.1, stiffness: 150, damping: 12 };
  const width = useSpring(widthTransform, spring);
  const height = useSpring(heightTransform, spring);
  const widthIcon = useSpring(widthTransformIcon, spring);
  const heightIcon = useSpring(heightTransformIcon, spring);

  const [hovered, setHovered] = useState(false);

  return (
    <DockItemShell item={item} onFocus={() => setHovered(true)} onBlur={() => setHovered(false)}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full border border-line bg-bg text-ink-muted transition-colors hover:text-ink"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-line bg-surface px-2 py-0.5 text-xs text-ink"
            >
              {item.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {item.icon}
        </motion.div>
      </motion.div>
    </DockItemShell>
  );
}
