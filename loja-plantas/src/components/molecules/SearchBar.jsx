import Button from "../atoms/Button";

export default function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Buscar..." />
      <Button label="Buscar" onClick={() => alert("Buscando...")} />
    </div>
  );
}
