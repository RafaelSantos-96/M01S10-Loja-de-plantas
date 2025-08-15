import React from "react";
import styles from "./PlantCard.module.css";
import PriceTag from "../atoms/PriceTag";
import PlantIcon from "../atoms/PlantIcon";
import Button from "../atoms/Button";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useTheme, Box } from "@mui/material";

const PlantCard = ({ plant }) => {
  const { name, price, light } = plant;
  const theme = useTheme();

  const lightIcon =
    light === "sun" ? (
      <WbSunnyIcon color="warning" />
    ) : (
      <NightlightIcon color="primary" />
    );

  return (
    <Box
      className={styles.card}
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: 2,
        padding: 2,
        boxShadow: theme.shadows[3],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className={styles.header}>
        <h3>{name}</h3>
        {lightIcon}
      </div>

      <PlantIcon size="md" />

      <PriceTag value={price} />

      <Button variant="primary">Comprar</Button>
    </Box>
  );
};

export default PlantCard;

