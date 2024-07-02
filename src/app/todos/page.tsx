"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

interface Todo {
  id: number;
  userId: number;
  title: string;
}

type GroupedTodos = Record<number, Todo[]>;

export default function Todos() {
  const [groupedTodos, setGroupedTodos] = useState<GroupedTodos>({});

  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((data) => {
        const grouped = groupTodosByUserId(data);
        setGroupedTodos(grouped);
      });
  }, []);

  const groupTodosByUserId = (todos: Todo[]): GroupedTodos => {
    return todos.reduce((acc, todo) => {
      if (!acc[todo.userId]) {
        acc[todo.userId] = [];
      }
      acc[todo.userId].push(todo);
      return acc;
    }, {} as GroupedTodos);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 2,
        flexWrap: "wrap",
      }}
    >
      {Object.entries(groupedTodos).map(([userId, todos]) => (
        <React.Fragment key={parseInt(userId)}>
          <div
            style={{
              margin: 8,
              maxHeight: 200,
              maxWidth: 300,
              overflowY: "scroll",
              overflowX: "clip",
            }}
          >
            <h2>User ID: {userId}</h2>
            {todos.map((todo: Todo) => (
              <div key={todo.id}>
                <p>{todo.title}</p>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
