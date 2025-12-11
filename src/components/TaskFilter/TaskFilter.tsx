import React from "react";
import type { TaskFilterProps, TaskStatus, TaskPriority } from "../../types";

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  function handleStatusChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    const value = event.target.value;

    if (value === "all") {
      onFilterChange({ status: undefined });
    } else if (
      value === "pending" ||
      value === "in-progress" ||
      value === "completed"
    ) {
      const status: TaskStatus = value;
      onFilterChange({ status });
    }
  }

  function handlePriorityChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    const value = event.target.value;

    if (value === "all") {
      onFilterChange({ priority: undefined });
    } else if (value === "low" || value === "medium" || value === "high") {
      const priority: TaskPriority = value;
      onFilterChange({ priority });
    }
  }

  return (
    <div>
      <label>
        Status:{" "}
        <select onChange={handleStatusChange} defaultValue="all">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label>
        Priority:{" "}
        <select onChange={handlePriorityChange} defaultValue="all">
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </div>
  );
}