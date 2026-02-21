// app/page.tsx
export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 relative">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
              Responsibility Sharing Society / Next Child Project
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              親の「無限責任」を、社会で分け合える形にする。
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Next Child Projectは、対話型AIと生活設計で、子育ての負担を軽くする
              「責任共有社会」を可視化します。
              いまはプロトタイプ公開フェーズ（Phase1）。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-cyan-400 text-black font-semibold px-6 hover:bg-cyan-300 transition"
              >
                実機デモを見る
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 text-white font-semibold px-6 hover:bg-white/10 transition"
              >
                問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core */}
      <section id="core" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              責任共有社会の要点（Phase1）
            </h2>
            <p className="text-white/70 leading-relaxed">
              思想の完成ではなく、「見せられる状態」を固定する段階です。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "責任は“親だけ”に閉じない",
                text: "子育てを家庭内の無限責任にせず、支援・環境・仕組みに分散させる。",
              },
              {
                title: "逃げ道＝回復可能性を増やす",
                text: "戻れる選択肢（可逆性）を設計する。",
              },
              {
                title: "AIは“手続き・記録・運用”を担う",
                text: "記録・安全ログ・運用負担を軽くする方向で使う。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/[0.08] p-10 backdrop-blur-md hover:bg-white/[0.12] transition"
              >
                <p className="font-semibold mb-4">{item.title}</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* T.O.U */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold mb-10">T.O.U. Connect</h3>

            <div className="grid gap-8 md:grid-cols-3">
              {["Trust", "Outsource", "Uplift"].map((label, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/[0.08] p-10 backdrop-blur-md hover:bg-white/[0.12] transition"
                >
                  <p className="font-semibold text-lg">{label}</p>
                  <p className="mt-4 text-sm text-white/70">
                    コンセプトの具体化領域。
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}