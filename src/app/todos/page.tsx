"use client";

import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";

interface Todos {
  id: number;
  title: string;
}

export default function Todos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <main>
      <Sidebar />
      <h1>teste todos</h1>
      {data?.map((e: Todos) => (
        <div key={e.id} style={{ margin: 20 }}>
          <p>{e.title}</p>
        </div>
      ))}
    </main>
  );
}
