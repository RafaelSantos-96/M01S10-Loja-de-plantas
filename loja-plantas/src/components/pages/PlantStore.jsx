import React from "react";
import StoreLayout from "../templates/StoreLayout";
import PlantGrid from "../organisms/PlantGrid";
import { mockPlants } from "../mocks/mockPlants";

const PlantStore = () => {
  return (
    <StoreLayout>
      <PlantGrid plants={mockPlants} />
    </StoreLayout>
  );
};

export default PlantStore;
