import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { statusArr } from "./types";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import NightModeToggle from "./theme/NightModeToggle";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{ textAlign: "center", justifyContent: "center", width: "auto" }}
      >
        <Typography variant="h3" gutterBottom>
          Todo List
        </Typography>
        <CssBaseline />
        <NightModeToggle />
        <AddTodoForm />
        <Grid container spacing={2} justifyContent="center">
          {statusArr.map((status, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <TodoList status={status} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
