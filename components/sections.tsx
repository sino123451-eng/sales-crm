import { CtaLink } from "./cta-link";
import { SectionHeading } from "./section-heading";

const problems = [
  ["地方でキャリアが積めるか不安", "地元に残ることが、キャリアの選択肢を狭めるように感じる。"],
  ["仕事内容のリアルが見えにくい", "求人票だけでは、働くイメージが持ちにくい。"],
  ["自分に合う企業かわからない", "条件だけで判断して、本当に合うのか不安が残る。"],
  ["今の経験が活かせるか知りたい", "これまでの経験やスキルが、地域企業でどう活きるのか知りたい。"],
];

const features = [
  ["仕事理解", "どんな仕事をするのかがわかる。業務内容や任される役割を整理して、働く前に仕事のイメージを持ちやすくします。"],
  ["人材要件理解", "どんな人に合う仕事なのかがわかる。求められる経験、考え方、向いている人の特徴を整理し、自分に合うかを考えやすくします。"],
  ["スキル理解", "その仕事で得られる経験・スキルがわかる。働くことでどんな経験を積めるのか、どんなスキルが育つのかを知ることができます。"],
];

const targetCards = [
  ["今の働き方を見直したい方へ", "ひとりで飛び込まず、地域で自分に合う環境を知ることから始められます。"],
  ["都会での経験を活かしたい方へ", "都会で磨いた経験を、地域企業の中で活かせる可能性があります。"],
  ["地方で新しい可能性を知りたい方へ", "一社だけで決めきらず、地域の中で選択肢を広げることができます。"],
];

const lineInfo = ["地域企業のPROJECT情報", "仕事内容・役割", "向いている人の特徴", "得られる経験・スキル", "説明会・イベント情報", "新しい募集情報"];

const safety = [
  ["登録無料", "LINE登録に費用はかかりません。"],
  ["いつでも解除可能", "不要になった場合は、いつでも解除できます。"],
  ["応募扱いにはなりません", "登録は、地域企業の仕事情報を受け取るためのものです。"],
  ["人材紹介・派遣ではありません", "企業への採用仲介は行いません。"],
];

function NumberBadge({ children }: { children: string }) {
  return <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky text-sm font-bold text-primary-dark">{children}</span>;
}

export function ProblemSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          title={`求人票だけでは、\nわからないことがある。`}
          description="仕事内容は書いてある。でも、実際にどんな役割を任されるのか。どんな人に合う仕事なのか。その仕事を通じて、どんな経験やスキルが身につくのか。そこまで見えないまま、転職や就職を決めるのは不安です。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {problems.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-border bg-bg p-6">
              <h3 className="text-lg font-bold text-primary-dark">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 rounded-3xl bg-primary-dark px-6 py-5 text-center text-lg font-bold text-white">
          だから、まずは「応募」ではなく、地域の仕事を知ることから。
        </p>
      </div>
    </section>
  );
}

export function AboutSection() {
  const steps = ["LINE登録", "地域企業・PROJECT情報を受け取る", "仕事内容や得られるスキルを知る", "自分に合う働き方を考える"];
  return (
    <section className="py-16 md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <SectionHeading
            title={`てんしょくしホーダイは、\n地域企業の仕事を知れるLINEコミュニティです。`}
            description="てんしょくしホーダイでは、地域企業の仕事内容、求める人物像、その仕事で得られる経験やスキルを、LINEで受け取ることができます。求人票だけでは見えにくい仕事の中身を知りながら、自分に合う地域での働き方を考えるためのコミュニティです。"
          />
          <div className="soft-card rounded-[2rem] p-5 md:p-8">
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-center gap-4 rounded-2xl bg-bg p-4">
                  <NumberBadge>{String(index + 1).padStart(2, "0")}</NumberBadge>
                  <span className="font-bold text-primary-dark">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="mt-8 rounded-3xl border border-border bg-white p-5 text-sm leading-7 text-muted">
          てんしょくしホーダイは、人材紹介・派遣・採用仲介ではありません。地域企業の採用情報をわかりやすく届けるための情報提供サービスです。
        </p>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          align="center"
          title={`求人票だけでは見えにくい、\n3つの情報を届けます。`}
          description="てんしょくしホーダイでは、単に企業名や募集条件を届けるだけではありません。仕事の中身や、そこで得られる経験まで見えるように整理してお届けします。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map(([title, text], index) => (
            <article key={title} className="soft-card rounded-[2rem] p-6">
              <NumberBadge>{String(index + 1)}</NumberBadge>
              <h3 className="mt-5 text-xl font-bold text-primary-dark">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-lg font-bold text-primary-dark">
          仕事の中身が見えると、地方で働く選択肢はもっと考えやすくなる。
        </p>
      </div>
    </section>
  );
}

export function TargetSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          title="こんな想いがある方に向いています。"
          description="てんしょくしホーダイは、今すぐ転職を決めたい人だけのためのものではありません。地域で働くことに少しでも関心がある方が、まず情報を受け取り、自分に合う働き方を考えるための入口です。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[2rem] bg-primary-dark p-7 text-white md:p-10">
            <p className="text-sm font-bold text-sky">地元でキャリアを作りたい方へ</p>
            <h3 className="mt-3 text-2xl font-bold leading-relaxed">地元に残ることは、キャリアを諦めることじゃない。</h3>
            <p className="mt-5 leading-8 text-white/82">地域の企業で働きながら、自分に合うキャリアを育てる選択肢があります。</p>
          </article>
          <div className="grid gap-4">
            {targetCards.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-border bg-white p-6">
                <h3 className="font-bold text-primary-dark">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LineInfoSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          align="center"
          title={`LINE登録後は、\nこんな情報が届きます。`}
          description="登録後は、地域企業やPROJECTに関する情報をLINEで受け取ることができます。登録しただけで応募扱いにはなりません。まずは気になる情報を見るだけで大丈夫です。"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lineInfo.map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-bg p-5 font-bold text-primary-dark">
              <span className="mr-2 text-line">●</span>{item}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CtaLink ariaLabel="LINEで情報を受け取る">LINEで情報を受け取る</CtaLink>
          <p className="mt-4 text-sm leading-7 text-muted">登録＝応募ではありません。気になる情報を確認しながら、自分に合う働き方を考えられます。</p>
        </div>
      </div>
    </section>
  );
}

export function ProjectExampleSection() {
  const fit = ["人と関わる仕事が好きな方", "地域で経験を積みたい方", "自分の役割を広げていきたい方"];
  const skills = ["企画力", "顧客対応力", "地域企業との連携経験", "課題を整理して動かす力"];
  return (
    <section className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          title="掲載される情報のイメージ"
          description="LINEでは、PROJECT名と企業名をもとに、地域企業の仕事情報をわかりやすくお届けします。求人票だけでは伝わりにくい『仕事内容』『向いている人』『得られる経験』まで整理して掲載します。"
        />
        <article className="soft-card mt-10 rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-sky/70 p-6">
              <p className="text-sm font-bold text-primary">PROJECT名</p>
              <h3 className="mt-2 text-2xl font-bold text-primary-dark">地域キャリア形成プロジェクト</h3>
              <p className="mt-5 text-sm font-bold text-primary">企業名</p>
              <p className="mt-1 font-bold text-primary-dark">株式会社〇〇</p>
              <p className="mt-5 text-sm font-bold text-primary">仕事の内容</p>
              <p className="mt-1 text-muted">地域企業の営業・企画・運営サポート</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <InfoList title="向いている人" items={fit} />
              <InfoList title="得られる経験・スキル" items={skills} />
            </div>
          </div>
          <p className="mt-6 text-xs leading-6 text-muted">※実際の掲載内容は、参加企業・PROJECTにより異なります。</p>
        </article>
      </div>
    </section>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-border bg-white p-5">
      <h4 className="font-bold text-primary-dark">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
        {items.map((item) => <li key={item}>・{item}</li>)}
      </ul>
    </div>
  );
}

export function SafetySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          title="安心して情報を受け取れる仕組みです。"
          description="てんしょくしホーダイは、地域企業の仕事情報を届けるためのLINEコミュニティです。登録しただけで応募扱いになったり、企業へ情報が送られたりするものではありません。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {safety.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-border bg-bg p-5">
              <h3 className="font-bold text-primary-dark">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-3 rounded-3xl bg-primary-dark p-6 text-white sm:grid-cols-2">
          <p className="font-bold">運営：株式会社Onefamily</p>
          <p className="font-bold">特定募集情報等提供事業として届出済み</p>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 mx-auto h-64 max-w-4xl rounded-full bg-sky/70 blur-3xl" aria-hidden="true" />
      <div className="section-shell relative text-center">
        <div className="soft-card mx-auto max-w-4xl rounded-[2rem] p-7 md:p-12">
          <h2 className="whitespace-pre-line text-balance text-3xl font-bold leading-[1.35] text-primary-dark md:text-5xl">
            {`地方で働く選択肢を、\nまずはLINEで受け取る。`}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            いきなり応募を前提にする必要はありません。まずは地域企業の仕事情報を知り、自分に合う働き方を考えるきっかけにしてください。
          </p>
          <div className="mt-8">
            <CtaLink ariaLabel="LINEで地域の仕事情報を受け取る">LINEで地域の仕事情報を受け取る</CtaLink>
          </div>
          <p className="mt-4 text-sm font-bold text-muted">登録無料／いつでも解除できます</p>
          <p className="mt-2 text-sm text-muted">人材紹介・派遣・採用仲介ではありません</p>
          <p className="mx-auto mt-8 max-w-3xl text-base font-bold leading-8 text-primary-dark">
            地元に残ることも、地方で働くことも、キャリアを諦めることではありません。まずは、自分に合う地域の仕事を知ることから始めてみませんか。
          </p>
        </div>
      </div>
    </section>
  );
}
