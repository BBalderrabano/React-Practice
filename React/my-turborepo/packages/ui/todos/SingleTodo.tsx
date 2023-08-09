"use client";

import React, { useEffect, useRef, useState } from "react";
import { Todo, TodoAction, TodoActions } from "../../my-types";

interface Props {
  todo: Todo;
  dispatch: React.Dispatch<TodoAction>;
}

const SingleTodo: React.FC<Props> = ({ todo, dispatch }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.title);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ id: todo.id, type: TodoActions.UPDATE, payload: editTodo });
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <li>
      <form onSubmit={(e) => handleEdit(e)}>
        {edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(e) => {
              setEditTodo(e.target.value);
            }}
            onBlur={() => setEdit(false)}
          ></input>
        ) : todo.isDone ? (
          <s>{todo.title}</s>
        ) : (
          <span>{todo.title}</span>
        )}

        <div>
          <span
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(true);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            {" "}
            e{" "}
          </span>
          <span
            onClick={() => {
              dispatch({ id: todo.id, type: TodoActions.TOGGLE });
            }}
            style={{ cursor: "pointer" }}
          >
            {" "}
            +{" "}
          </span>
          <span
            onClick={() => {
              dispatch({ id: todo.id, type: TodoActions.DELETE });
            }}
            style={{ cursor: "pointer" }}
          >
            {" "}
            x{" "}
          </span>
        </div>
      </form>
    </li>
  );
};

export default SingleTodo;
