import React from "react";
import styles from "./PlantCard.module.css";
import PriceTag from "../atoms/PriceTag";
import PlantIcon from "../atoms/PlantIcon";
import Button from "../atoms/Button";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';

const PlantCard = ({ plant }) => {
  const { name, price, light } = plant;

  const lightIcon = light === "sun" ? <WbSunnyIcon color="warning" /> : <NightlightIcon color="primary" />;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{name}</h3>
        {lightIcon}
      </div>

      <PlantIcon size="md" />

      <PriceTag value={price} />

      <Button variant="primary">Comprar</Button>
    </div>
  );
};

export default PlantCard;
