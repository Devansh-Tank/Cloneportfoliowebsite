import React from "react";
import { cn } from "../../../lib/utils";

interface DockProps {
  className?: string;
  children?: React.ReactNode;
}

export const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto flex h-[58px] w-max items-center gap-2 rounded-2xl border bg-background/50 px-4 backdrop-blur-md",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Dock.displayName = "Dock";

interface DockIconProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  key?: React.Key | null | undefined;
  magnification?: number;
  distance?: number;
  mouseX?: any;
}

export const DockIcon = ({
  className,
  children,
  href,
  onClick,
  ...props
}: DockIconProps) => {
  
  const content = (
      <div
        className={cn(
          "flex aspect-square cursor-pointer items-center justify-center rounded-full",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};
