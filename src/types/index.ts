// Task status options
export type TaskStatus = "pending" | "in-progress" | "completed";

// Task priority options
export type TaskPriority = "low" | "medium" | "high";

// What the form sends up
export type NewTaskData = {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
};

// Full Task stored in state / rendered in list
export type Task = NewTaskData & {
  id: string;
};

// Props for TaskList
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// Props for TaskItem
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// Props for TaskFilter
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: TaskPriority;
  }) => void;
}

// Props for TaskForm
export interface TaskFormProps {
  onAddTask: (newTask: NewTaskData) => void;
}
