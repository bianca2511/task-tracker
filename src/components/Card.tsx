import React, { useState } from "react";
import { TaskCard } from "../types";
import "../stylesheets/Card.css";

interface CardProps {
  card: TaskCard;
  updateCardStatus: (title: string, completed: boolean) => void;
}

const Card: React.FC<CardProps> = ({ card, updateCardStatus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [completed, setCompleted] = useState(card.completed);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  const toggleCheckbox = () => {
    const newStatus = !completed;
    setCompleted(newStatus);
    updateCardStatus(card.title, newStatus);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-div">
          <input
            type="checkbox"
            className="check"
            checked={completed}
            onChange={toggleCheckbox}
          />
          <p className="card-title">{card.title}</p>
          <div className="toggle" onClick={toggleCard}>
            v
          </div>
        </div>
        <div className="card-status-div">
          <p className="card-due">
            Due: {card.dueDate?.toLocaleDateString() || "No due date"}
          </p>
          <p className="card-status">Status: {completed ? "Completed" : "Pending"}</p>
        </div>
      </div>

      {isOpen && (
        <div className="card-details">
          <p className="card-description">Description: {card.description}</p>
          <ul className="subtasks">
            {card.subtasks?.length ? (
              card.subtasks.map((subtask, idx) => (
                <li key={idx}>
                  <input type="checkbox" checked={subtask.completed} />
                  {subtask.title}
                </li>
              ))
            ) : (
              <p>No subtasks</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
