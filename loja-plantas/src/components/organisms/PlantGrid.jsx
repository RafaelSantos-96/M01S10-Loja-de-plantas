import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import PlantCard from "../molecules/PlantCard";

const PlantGrid = ({ plants }) => {
  const theme = useTheme();

  // Define a quantidade de colunas com base no tamanho da tela
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // Mobile
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // Tablet

  // Define quantas colunas o item vai ocupar no Grid de 12 colunas
  const getGridSize = () => {
    if (isXs) return 12;      // 1 por linha
    if (isSm) return 6;       // 2 por linha
    return 4;                 // 3 por linha (12 / 3 = 4)
  };

  return (
    <Grid container spacing={2} justifyContent="center">
  {plants.map((plant) => (
    <Grid item key={plant.id} xs={getGridSize()}>
      <PlantCard plant={plant} />
    </Grid>
  ))}
</Grid>
  );
};

export default PlantGrid;


