"use client";

import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";

interface Comments {
  id: number;
  title: string;
}

export default function Comments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/comments")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <main>
      <Sidebar />
      <h1>teste comments</h1>
      {data?.map((e: Comments) => (
        <div key={e.id} style={{ margin: 20 }}>
          <p>{e.title}</p>
        </div>
      ))}
    </main>
  );
}
