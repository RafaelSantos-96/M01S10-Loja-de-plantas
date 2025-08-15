import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import PlantStore from "./components/pages/PlantStore";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
  <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <CssBaseline />
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="contained"
          onClick={() => setIsDark(!isDark)}
        >
          Alternar tema
        </Button>
      </Box>

      <PlantStore />
    </Box>
  </ThemeProvider>
);
};
export default App;

