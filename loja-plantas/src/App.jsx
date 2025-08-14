import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import Home from "./components/pages/Home";

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
        <Home />
      </Box>
    </ThemeProvider>
  );
};

export default App;


