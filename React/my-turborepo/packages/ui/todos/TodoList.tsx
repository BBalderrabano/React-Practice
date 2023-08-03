import React from "react";

import { Todo } from "../../my-types";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <>
      {todos.map((t) => (
        <SingleTodo todo={t} todos={todos} setTodos={setTodos} key={t.id}/>
      ))}
    </>
  );
};

export default TodoList;
