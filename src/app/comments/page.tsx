"use client";

import React, { useEffect, useState } from "react";

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
      <h1>teste comments</h1>
    </main>
  );
}
