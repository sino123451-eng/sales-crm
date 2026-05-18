import { CtaLink } from "./cta-link";

export function MobileFixedCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/92 p-3 shadow-[0_-12px_28px_rgba(31,79,77,0.10)] backdrop-blur md:hidden">
      <CtaLink className="w-full" ariaLabel="LINEで地域の仕事情報を受け取る">
        LINEで地域の仕事情報を受け取る
      </CtaLink>
    </div>
  );
}
