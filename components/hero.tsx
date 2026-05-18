import { CtaLink } from "./cta-link";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[linear-gradient(180deg,#F7FBF8_0%,#FFFFFF_72%)] pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="absolute left-[-80px] top-20 size-56 rounded-full bg-sky/70 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-4 right-[-90px] size-64 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="section-shell relative grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-primary">
            地域で働く選択肢を、LINEで受け取る
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.28] tracking-[-0.04em] text-primary-dark md:text-6xl">
            地方で働くことを、<br />キャリアの妥協にしない。
          </h1>
          <p className="mt-6 text-base leading-8 text-muted md:text-lg">
            てんしょくしホーダイは、地域企業の仕事情報や、そこで得られる経験・スキルをLINEで受け取れるコミュニティです。いきなり応募扱いになるものではなく、まずは地域で働く選択肢を知ることから始められます。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink className="w-full sm:w-auto" ariaLabel="LINEで地域の仕事情報を受け取る">
              LINEで地域の仕事情報を受け取る
            </CtaLink>
            <p className="text-sm font-bold text-muted">登録無料／いつでも解除できます</p>
          </div>
          <p className="mt-4 text-xs leading-6 text-muted">※人材紹介・派遣・採用仲介ではありません</p>
        </div>
        <div className="soft-card overflow-hidden rounded-[2rem] p-3">
          <div
            className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(223,243,247,0.95)_0%,rgba(247,251,248,0.9)_46%,rgba(139,191,122,0.42)_100%)]"
            aria-label="自然が近い地域で働くイメージを表した装飾エリア"
          >
            <div className="absolute left-8 top-10 h-24 w-40 rounded-[50%] bg-white/65 blur-sm" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 h-36 w-full bg-[linear-gradient(165deg,rgba(47,125,122,0.36)_0%,rgba(139,191,122,0.38)_46%,rgba(31,79,77,0.48)_100%)]" aria-hidden="true" />
            <div className="absolute bottom-14 left-[-8%] h-32 w-[62%] rounded-[100%_100%_0_0] bg-accent/55" aria-hidden="true" />
            <div className="absolute bottom-10 right-[-10%] h-40 w-[72%] rounded-[100%_100%_0_0] bg-primary/30" aria-hidden="true" />
            <div className="absolute right-10 top-10 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-bold text-primary-dark backdrop-blur">
              画像差し替え想定: /images/hero-local.jpg
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/90 p-5 backdrop-blur">
              <p className="text-sm font-bold text-primary">PROJECT情報の受け取り例</p>
              <p className="mt-2 text-lg font-bold text-primary-dark">仕事内容・向いている人・得られる経験をLINEで確認</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
