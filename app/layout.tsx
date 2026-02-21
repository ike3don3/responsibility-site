// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Responsibility Site | Next Child Project",
  description:
    "親の「無限責任」を社会で分け合える形にする。責任共有社会の思想を可視化するWeb（Phase1: プロトタイプ公開）。",
  metadataBase: new URL("https://touconnect.jp"),
  openGraph: {
    title: "Responsibility Site | Next Child Project",
    description:
      "責任共有社会の思想を可視化するWeb（Phase1: プロトタイプ公開）。実機デモ展示と次フェーズの検証計画へ。",
    url: "https://touconnect.jp/",
    siteName: "Responsibility Site",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsibility Site | Next Child Project",
    description:
      "責任共有社会の思想を可視化するWeb（Phase1: プロトタイプ公開）。",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-[#0d1b2a] text-white antialiased">
        {/* Header（小型・右上に Next Child Project） */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1b2a]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <a href="/" className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-wide">
                Responsibility Site
              </span>
              <span className="hidden sm:inline text-xs text-white/60">
                / Responsibility Sharing Society
              </span>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline text-xs text-white/70 hover:text-white"
              >
                Contact
              </a>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                Next Child Project
              </span>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold">Responsibility Site</p>
                <p className="text-xs text-white/60">
                  Phase1（ブランド可視化・プロトタイプ公開）
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                <a href="#core" className="hover:text-white">
                  Core
                </a>
                <a href="#demo" className="hover:text-white">
                  Demo
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
                <span className="text-white/30">|</span>
                <span className="text-white/50">© Next Child Project</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}