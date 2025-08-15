import React from "react";
import { Box, Container, Typography } from "@mui/material";

const StoreLayout = ({ children }) => {
  return (
    <Box>
      <Box component="header" sx={{ p: 2, backgroundColor: "background.paper" }}>
        <Typography variant="h5">🪴 Loja de Plantas</Typography>
      </Box>

      <Container sx={{ my: 4 }}>{children}</Container>

      <Box component="footer" sx={{ p: 2, backgroundColor: "background.paper", mt: 4 }}>
        <Typography variant="body2">© 2025 Loja de Plantas</Typography>
      </Box>
    </Box>
  );
};

export default StoreLayout;

