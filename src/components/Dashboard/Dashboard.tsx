import { useState } from "react";

import type { Task, TaskStatus, TaskPriority, NewTaskData } from "../../types";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskFilter } from "../TaskFilter/TaskFilter";
import { TaskList } from "../TaskList/TaskList";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Sample Task",
    description: "Task Details ",
    status: "completed",
    priority: "high",
    dueDate: "2025-12-25",
  }
 
];

export function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [statusFilter, setStatusFilter] = useState<TaskStatus | undefined>();
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | undefined>();

  //  Add task
  function handleAddTask(newTaskData: NewTaskData): void {
    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      ...newTaskData,
    };

    setTasks((prev) => [newTask, ...prev]);
  }

  //  Update status
  function handleStatusChange(taskId: string, newStatus: TaskStatus): void {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  // Delete task
  function handleDelete(taskId: string): void {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }

  //  Update filters
  function handleFilterChange(filters: {
    status?: TaskStatus;
    priority?: TaskPriority;
  }): void {
    if ("status" in filters) setStatusFilter(filters.status);
    if ("priority" in filters) setPriorityFilter(filters.priority);
  }

  // Filtered tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      statusFilter === undefined || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === undefined || task.priority === priorityFilter;

    return matchesStatus && matchesPriority;
  });

  return (
    <div>
      <h1>Task Manager Dashboard</h1>

      <TaskForm onAddTask={handleAddTask} />
      

      <h1>My Tasks</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}
