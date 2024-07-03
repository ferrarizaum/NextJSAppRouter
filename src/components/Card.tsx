import React from "react";

interface CardProps {
  title: string;
  completed: boolean;
}

export default function Card({ title }: CardProps) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
