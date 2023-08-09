"use client"

import React from "react";

import { Todo, TodoAction } from "../../my-types";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}

const TodoList: React.FC<Props> = ({ todos, dispatch }: Props) => {
  return (
    <>
      {todos.map((t) => (
        <SingleTodo todo={t} dispatch={dispatch} key={t.id}/>
      ))}
    </>
  );
};

export default TodoList;
