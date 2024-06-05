"use client";

import React, { useEffect, useState } from "react";

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
      <h1>teste todos</h1>
    </main>
  );
}
