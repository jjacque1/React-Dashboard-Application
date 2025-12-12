// src/components/TaskForm/TaskForm.tsx

import { useState } from "react";
import type { NewTaskData, TaskFormProps, TaskStatus, TaskPriority } from "../../types";

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [formValues, setFormValues] = useState<TaskFormValues>({
    title: "",
    description: "",
    status: "pending",     // default
    priority: "medium",    // default
    dueDate: "",
  });

  // ----- change handlers -----

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues((previousValues) => ({
      ...previousValues,
      title: event.target.value,
    }));
  }

  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setFormValues((previousValues) => ({
      ...previousValues,
      description: event.target.value,
    }));
  }

  function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = event.target.value as TaskStatus;

    setFormValues((previousValues) => ({
      ...previousValues,
      status: newStatus,
    }));
  }

  function handlePriorityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newPriority = event.target.value as TaskPriority;

    setFormValues((previousValues) => ({
      ...previousValues,
      priority: newPriority,
    }));
  }

  function handleDueDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues((previousValues) => ({
      ...previousValues,
      dueDate: event.target.value,
    }));
  }

  // ----- submit handler -----

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Very simple guard for now – we can add real validation later
    if (!formValues.title.trim()) {
      return;
    }

    onAddTask(formValues);

    // Reset the form after adding a task
    setFormValues({
      title: "",
      description: "",
      status: "pending",
      priority: "medium",
      dueDate: "",
    });
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>

      <div>
        <label>
          Title:
          <input
            type="text"
            value={formValues.title}
            onChange={handleTitleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Description:
          <textarea
            value={formValues.description}
            onChange={handleDescriptionChange}
          />
        </label>
      </div>

      <div>
        <label>
          Status:
          <select value={formValues.status} onChange={handleStatusChange}>
            <option value="pending">Pending</option>
            <option value="in-progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Priority:
          <select value={formValues.priority} onChange={handlePriorityChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Due date:
          {/* we can change this to type="date" later if you want */}
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            value={formValues.dueDate}
            onChange={handleDueDateChange}
          />
        </label>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}
