import React, { useState } from "react";
import PlantCard from "../molecules/PlantCard";
import styles from "./Home.module.css";
import PlantGrid from "../organisms/PlantGrid";

const Home = () => {
  const [plants, setPlants] = useState([
    {
      id: "1",
      name: "Samambaia",
      price: 29.9,
      light: "shade",
    },
    {
      id: "2",
      name: "Espada de São Jorge",
      price: 39.9,
      light: "sun",
    },
    {
      id: "3",
      name: "Zamioculca",
      price: 49.9,
      light: "shade",
    },
  ]);

  return (
   <div style={{ padding: "16px" }}>
  <h2>Bem-vindo à nossa loja de plantas 🌿</h2>
  <PlantGrid plants={plants} />
</div>
  );
};

export default Home;




