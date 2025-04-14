import React from "react";
import { TaskCard } from "../types";
import "../stylesheets/Card.css"

interface CardProps {
  card: TaskCard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
    <input type="checkbox" className="check"></input>
      <p>{card.title}</p>
      <p>{card.description}</p>
      <p>
        Due:{" "}
        {card.dueDate
          ? card.dueDate.toLocaleDateString()
          : "No due date set"}
      </p>
      <p>Status: {card.completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default Card;
