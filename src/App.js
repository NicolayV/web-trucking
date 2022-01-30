import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Grid>
  );
}

export default App;
