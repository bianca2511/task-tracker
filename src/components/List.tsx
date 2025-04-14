// components/List.tsx
import React, { useState } from "react";
import Card from "./Card";
import { TaskCard } from "../types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../stylesheets/List.css";

const List: React.FC = () => {
  const [cards, setCards] = useState<TaskCard[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(new Date());

  const addCard = () => {
    if (title.trim() === "") return;

    const newCard: TaskCard = {
      title,
      description,
      completed: false,
      dueDate,
    };

    setCards([...cards, newCard]);
    setTitle("");
    setDescription("");
    setDueDate(new Date());
  };

  return (
    <div className="list">
      <h1>Task List</h1>
      <div className="input-new-task">
        <div className="input-text">
          <input
            className="input-title"
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="input-description"
            // type="text"
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <DatePicker
          className="input-date"
          selected={dueDate}
          onChange={(date: Date | null) => setDueDate(date)}
          placeholderText="Select due date"
        />

        <button className="add-button" onClick={addCard}>
          Add Task
        </button>
      </div>
      <div>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default List;
