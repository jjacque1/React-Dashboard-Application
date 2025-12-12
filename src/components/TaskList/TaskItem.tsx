import React from "react";
import type { TaskItemProps, TaskStatus } from "../../types";

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  function handleStatusChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    const value = event.target.value;

    let newStatus: TaskStatus;

    if (value === "pending") {
      newStatus = "pending";
    } else if (value === "in-progress") {
      newStatus = "in-progress";
    } else {
      newStatus = "completed";
    }

    onStatusChange(task.id, newStatus);
  }

  function handleDeleteClick(): void {
    onDelete(task.id);
  }

  return (
    <li className="task-wrapper ">
      <h3>{task.title}</h3>
      <h4>{task.description}</h4>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>

      <label>
        Change status:{" "}
        <select value={task.status} onChange={handleStatusChange}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <button onClick={handleDeleteClick}>Delete task</button>
    </li>
  );
}
