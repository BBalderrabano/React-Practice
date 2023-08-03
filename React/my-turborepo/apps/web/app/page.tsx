"use client";

import React, { useState } from "react";
import { Button, Header, InputField } from "ui";
import TodoList from "ui/todos/TodoList";
import { Todo } from "my-types";

const Page: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);

      setTodo("");
    }
  };

  return (
    <>
      <span>Testing Typescript</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  );
};

export default Page;
