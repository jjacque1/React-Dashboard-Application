import "./App.css";
import { useState } from "react";

import type { Task, TaskStatus, TaskPriority } from "./types";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";

const initialTasks: Task[] = [
  {
    id: "4",
    title: "Make Stupid Moneysss",
    description: "Slowly work my way up the tech space.",
    status: "pending",
    priority: "low",
    dueDate: "2026-12-30",
  },
  {
    id: "1",
    title: "Study React",
    description: "Complete Lesson 6 and Lesson 7 labs.",
    status: "in-progress",
    priority: "high",
    dueDate: "2025-12-20",
  },
  {
    id: "2",
    title: "Apply for jobs",
    description: "Search and apply for at least 3 new positions.",
    status: "pending",
    priority: "medium",
    dueDate: "2025-12-22",
  },
  {
    id: "3",
    title: "Finish Assignment",
    description: "Work on the Task Manager lab.",
    status: "completed",
    priority: "high",
    dueDate: "2025-12-10",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [statusFilter, setStatusFilter] = useState<TaskStatus | undefined>(
    undefined
  );
  const [priorityFilter, setPriorityFilter] = useState<
    TaskPriority | undefined
  >(undefined);

  // Update a task's status
  function handleStatusChange(taskId: string, newStatus: TaskStatus): void {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: newStatus,
          };
        }
        return task;
      })
    );
  }

  // Delete a task
  function handleDelete(taskId: string): void {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  }

  // Update filters (called by TaskFilter)
  function handleFilterChange(filters: {
    status?: TaskStatus;
    priority?: TaskPriority;
  }): void {
    if ("status" in filters) {
      setStatusFilter(filters.status);
    }
    if ("priority" in filters) {
      setPriorityFilter(filters.priority);
    }
  }

  // Apply filters to tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      statusFilter === undefined || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === undefined || task.priority === priorityFilter;

    return matchesStatus && matchesPriority;
  });

  return (
    <div>
      <h1>Task Manager </h1>

      <TaskFilter onFilterChange={handleFilterChange} />

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
