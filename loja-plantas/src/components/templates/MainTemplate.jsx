import Header from "../organisms/Header";

export default function MainTemplate({ children }) {
  return (
    <div>
      <header style={{ backgroundColor: "#2e7d32", color: "white", padding: "1rem" }}>
        <h1>Loja de Plantas</h1>
      </header>
      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
}
