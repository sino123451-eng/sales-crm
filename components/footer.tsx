export function Footer() {
  return (
    <footer className="border-t border-border bg-white pb-24 pt-10 md:pb-10">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xl font-bold text-primary-dark">てんしょくしホーダイ</p>
            <p className="mt-3 text-sm leading-7 text-muted">運営：株式会社Onefamily</p>
            <p className="text-sm leading-7 text-muted">特定募集情報等提供事業として届出済み</p>
            <p className="text-sm leading-7 text-muted">人材紹介・派遣・採用仲介ではありません</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-primary-dark" aria-label="フッターナビゲーション">
            <a href="#" aria-label="プライバシーポリシーを見る">プライバシーポリシー</a>
           
            <a href="#" aria-label="お問い合わせページを見る">お問い合わせ</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
