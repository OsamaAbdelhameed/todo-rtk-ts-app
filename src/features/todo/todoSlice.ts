import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoPayload } from "../../types";

type State = { todos: Todo[] };

const initialState: State = {
  todos: [
    { id: 1, title: "Attend final exams", status: "doing" },
    { id: 2, title: "Learn Redux", status: "doing" },
    { id: 3, title: "Work as Intern", status: "todo" },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        { id: Date.now(), title: action.payload, status: "todo" },
      ];
    },
    moveTodo: (state, action: PayloadAction<TodoPayload>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
    },
  },
});

export default todoSlice.reducer;
export const { createTodo, moveTodo } = todoSlice.actions;
