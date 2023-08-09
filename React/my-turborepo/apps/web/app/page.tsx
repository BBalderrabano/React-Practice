"use client";

import React, { useReducer, useState } from "react";
import { Button, Header, InputField } from "ui";
import TodoList from "ui/todos/TodoList";
import { TodoState, TodoActions, TodoAction } from "my-types";

function todoReducer(state: TodoState, action: TodoAction) : TodoState {
  const { type, payload } = action;

  switch (type) {
    case TodoActions.SET_TITLE:
      return { ...state, title: payload };
    case TodoActions.ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: state.title, isDone: false },
        ],
        title: "",
      };
    case TodoActions.TOGGLE:
      return {
        ...state,
        todos: state.todos.map((t) => t.id === action.id ? {...t, isDone: !t.isDone} : t)
      }
    case TodoActions.UPDATE:
      return {
        ...state,
        todos: state.todos.map((t) => t.id === action.id ? {...t, title: payload} : t)
      }
    case TodoActions.DELETE:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.id)
      }
  }

  return state;
}


const Page: React.FC = () => {

  const [state, dispatch] = useReducer(todoReducer, {
    title: "",
    todos: [],
  });

  return (
    <>
      <span>Testing Typescript</span>
      <InputField todo={state.title} dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
    </>
  );
};

export default Page;
