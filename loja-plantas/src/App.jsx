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
        <Button
          variant="contained"
          onClick={() => setIsDark(!isDark)}
          sx={{ mb: 2 }}
        >
          Alternar tema
        </Button>
        <PlantStore />
      </Box>
    </ThemeProvider>
  );
};

export default App;


