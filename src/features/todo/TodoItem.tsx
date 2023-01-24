import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { Todo, statusArr } from "../../types";
import { moveTodo } from "./todoSlice";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ButtonGroup } from "@mui/material";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
    >
      <Typography variant="body1">{todo.title}</Typography>
      <Box>
        <ButtonGroup
          variant="contained"
          color="primary"
          size="small"
          style={{ marginRight: 8 }}
          aria-label="outlined primary button group"
        >
          {statusArr.map((status, i) =>
            status !== todo.status ? (
              <Button
                key={i}
                onClick={() => dispatch(moveTodo({ id: todo.id, status }))}
              >
                {status.toUpperCase()}
              </Button>
            ) : null
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default TodoItem;
