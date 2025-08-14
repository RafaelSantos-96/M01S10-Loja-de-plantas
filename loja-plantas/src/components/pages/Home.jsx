import React, { useState } from "react";
import PlantGrid from "../organisms/PlantGrid";
import { Paper } from "@mui/material";

const Home = () => {
  const [plants] = useState([
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
    <Paper elevation={3} style={{ padding: "16px" }}>
      <h2>Bem-vindo à nossa loja de plantas 🌿</h2>
      <PlantGrid plants={plants} />
    </Paper>
  );
};

export default Home;






