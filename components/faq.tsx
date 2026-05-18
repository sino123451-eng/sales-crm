"use client";

import { useState } from "react";
import { SectionHeading } from "./section-heading";

const faqs = [
  ["LINE登録すると応募したことになりますか？", "いいえ。LINE登録は応募ではありません。地域企業の仕事情報を受け取るための登録です。"],
  ["人材紹介サービスですか？", "いいえ。てんしょくしホーダイは、人材紹介・派遣・採用仲介ではありません。"],
  ["登録に料金はかかりますか？", "登録は無料です。"],
  ["地方に住んでいなくても登録できますか？", "はい。地方で働くことに関心がある方であれば登録できます。"],
  ["どんな情報が届きますか？", "地域企業の仕事内容、求める人物像、得られる経験・スキル、PROJECT情報などをお届けします。"],
  ["登録後に企業から直接連絡が来ますか？", "LINE登録だけで企業から直接連絡が来ることはありません。気になる情報を確認しながら、自分に合う働き方を考えられます。"],
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading align="center" title="よくある質問" description="LINE登録前に気になる点をまとめました。" />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={question} className="overflow-hidden rounded-3xl border border-border bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-primary-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-line/25"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>Q. {question}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-bg text-primary" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div id={panelId} hidden={!isOpen} className="border-t border-border px-5 py-5 text-sm leading-7 text-muted">
                  A. {answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
