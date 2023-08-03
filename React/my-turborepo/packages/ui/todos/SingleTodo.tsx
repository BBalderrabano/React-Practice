import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../my-types";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number, e: React.FormEvent) => {
    e.preventDefault();
    setTodos(todos.map((t) => (t.id === id ? { ...t, todo: editTodo } : t)));
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <li>
      <form onSubmit={(e) => handleEdit(todo.id, e)}>
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
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
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
            onClick={() => handleDone(todo.id)}
            style={{ cursor: "pointer" }}
          >
            {" "}
            +{" "}
          </span>
          <span
            onClick={() => handleDelete(todo.id)}
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
