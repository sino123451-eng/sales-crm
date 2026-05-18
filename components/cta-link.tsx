import type { ReactNode } from "react";

export const LINE_URL = "ここにLINE登録URLを入れる";

type CtaLinkProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  variant?: "line" | "outline";
};

export function CtaLink({ children, className = "", ariaLabel, variant = "line" }: CtaLinkProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-line/25";
  const styles =
    variant === "line"
      ? "bg-line text-white shadow-[0_12px_28px_rgba(6,199,85,0.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(6,199,85,0.28)]"
      : "border border-border bg-white text-primary-dark hover:border-primary hover:bg-bg";

  return (
    <a href={LINE_URL} aria-label={ariaLabel ?? "LINEで地域の仕事情報を受け取る"} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
