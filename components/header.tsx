import { CtaLink } from "./cta-link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/88 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#top" className="flex items-center gap-2 font-bold text-primary-dark" aria-label="てんしょくしホーダイのページ上部へ戻る">
          <span className="grid size-9 place-items-center rounded-2xl bg-sky text-lg">畑</span>
          <span className="text-base md:text-xl">てんしょくしホーダイ</span>
        </a>
        <CtaLink ariaLabel="LINEでてんしょくしホーダイに参加する" className="min-h-10 px-4 py-2 text-xs md:min-h-12 md:px-6 md:text-sm">
          LINEで参加する
        </CtaLink>
      </div>
    </header>
  );
}
