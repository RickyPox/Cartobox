import { cn } from "@/lib/utils";

interface PlaceholderPhotoProps {
  label: string;
  className?: string;
}

/**
 * Styled stand-in for a real photo, matching the design's `.ph`/`.phlbl` treatment.
 * loremflickr's keyword search returns unpredictable, often unrelated photos, so this
 * renders the design's intended placeholder pattern until real photos are supplied.
 */
export function PlaceholderPhoto({ label, className }: PlaceholderPhotoProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-kraft-light to-[#dcc39a] bg-[repeating-linear-gradient(90deg,rgba(154,114,64,.16)_0_2px,transparent_2px_12px)] p-4.5 text-center",
        className
      )}
    >
      <span className="font-mono text-[11.5px] tracking-[.16em] text-kraft-dark uppercase">
        {label}
      </span>
    </div>
  );
}
