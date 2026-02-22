export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0f172a",
      color: "white",
      fontFamily: "sans-serif"
    }}>

      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Responsibility Sharing Society
        </h1>

        <p style={{ fontSize: "1.3rem", maxWidth: "700px", lineHeight: "1.6" }}>
          子育ては、共有できる。
          <br />
          親の責任を社会で再設計する。
        </p>

        <div style={{ marginTop: "2rem", fontSize: "0.9rem", opacity: 0.7 }}>
          Next Child Project / T.O.U Connect
        </div>
      </section>

      {/* Concept Section */}
      <section style={{
        padding: "4rem 2rem",
        backgroundColor: "#111827",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          What is Next Child?
        </h2>

        <p style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8",
          opacity: 0.85
        }}>
          核家族モデルに集中した「無限責任」を、
          社会全体で分散する新しい育児設計。
          <br />
          Trust – Outsource – Uplift。
          責任を軽くし、選択肢を増やし、回復可能性を確保する。
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "2rem",
        textAlign: "center",
        opacity: 0.5,
        fontSize: "0.9rem"
      }}>
        © {new Date().getFullYear()} Next Child Project
      </footer>

    </main>
  );
}