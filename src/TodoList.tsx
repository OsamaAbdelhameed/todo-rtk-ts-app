import React from "react";
import { Status } from "./types";
import { useAppSelector } from "./app/hooks";
import TodoItem from "./features/todo/TodoItem";

interface TodoListProps {
  status: Status;
}

const TodoList: React.FC<TodoListProps> = ({ status }) => {
  const todos = useAppSelector((state) => state.todo.todos);
  const filteredTodos = todos.filter((todo) => todo.status === status);

  return (
    <div>
      <h2>{status.toUpperCase()}</h2>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
