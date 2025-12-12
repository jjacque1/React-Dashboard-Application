// Task status options
export type TaskStatus = "pending" | "in-progress" | "completed";

// Task priority options
export type TaskPriority = "low" | "medium" | "high";

// Main Task shape

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}


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

// New type: what data the form sends *up* to App/Dashboard
export interface NewTaskData {
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

// Props for TaskForm
export interface TaskFormProps {
  onAddTask: (newTask: NewTaskData) => void;
}
