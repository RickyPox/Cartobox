import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  lineClassName?: string;
}

export function Eyebrow({ children, className, lineClassName }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-xs font-bold tracking-[.2em] text-kraft-dark uppercase",
        className
      )}
    >
      <span className={cn("h-0.5 w-6 bg-kraft", lineClassName)} />
      {children}
    </span>
  );
}
