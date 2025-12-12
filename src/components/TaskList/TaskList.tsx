import type { TaskListProps } from "../../types";
import { TaskItem } from "./TaskItem";

export function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks match the current filters.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}