"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from "motion/react";
import { createContext, useContext, useRef, type ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
  magnification?: number;
  distance?: number;
  mobileSize?: number;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
}

const BASE_SIZE = 40;
const ICON_SIZE_RATIO = 0.5;
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

interface DockContextValue {
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
}

const DockContext = createContext<DockContextValue | null>(null);

const Dock = ({ className, children, magnification = 60, distance = 100, mobileSize = BASE_SIZE }: DockProps) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockContext.Provider value={{ mouseX, magnification, distance }}>
      <motion.div
        onMouseMove={(event) => mouseX.set(event.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        style={{ "--dock-mobile-size": `${mobileSize}px` } as React.CSSProperties}
        className={cn("mx-auto flex h-full w-max items-end justify-center overflow-visible rounded-full border", className)}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
};

const DockIcon = ({ className, children }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("DockIcon must be used within a Dock component");
  }

  const { mouseX, magnification, distance } = context;
  const distanceCalc = useTransform(mouseX, (value: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return value - bounds.x - bounds.width / 2;
  });
  const containerSize = useSpring(useTransform(distanceCalc, [-distance, 0, distance], [BASE_SIZE, magnification, BASE_SIZE]), SPRING);
  const iconSize = useSpring(useTransform(distanceCalc, [-distance, 0, distance], [BASE_SIZE * ICON_SIZE_RATIO, magnification * ICON_SIZE_RATIO, BASE_SIZE * ICON_SIZE_RATIO]), SPRING);

  return (
    <motion.div ref={ref} style={{ width: containerSize, height: containerSize }} className={cn("dock-item relative flex aspect-square h-[var(--dock-mobile-size)] w-[var(--dock-mobile-size)] shrink-0 items-center justify-center rounded-full sm:h-auto sm:w-auto", className)}>
      <motion.div style={{ width: iconSize, height: iconSize }} className="dock-item-icon flex items-center justify-center">
        {children}
      </motion.div>
    </motion.div>
  );
};

export { Dock, DockIcon };
