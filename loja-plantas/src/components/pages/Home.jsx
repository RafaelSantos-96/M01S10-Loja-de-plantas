import Button from "../atoms/Button";
import PriceTag from "../atoms/PriceTag";
import PlantIcon from "../atoms/PlantIcon";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Bem-vindo à nossa loja de plantas 🌿</h2>

      <Button variant="primary">Comprar</Button>
      <Button variant="secondary" style={{ marginLeft: "1rem" }}>Ver mais</Button>

      <div style={{ marginTop: "1rem" }}>
        <PriceTag value={25.9} />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <PlantIcon size="sm" />
        <PlantIcon size="md" />
        <PlantIcon size="lg" />
      </div>
    </div>
  );
}



