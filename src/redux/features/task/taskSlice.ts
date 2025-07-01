import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";
// import { nanoid } from "nanoid";
interface InitialState {
  tasks: ITask[];
  filter: string;
}

const initialState: InitialState = {
  tasks: [
    {
      id: "sdfkgfosruhfgg",
      title: "Initialize frontend",
      description: "Create home page, and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
      assignedTo: null,
    },
    {
      id: "sdfkgsfssffosruhfgg",
      title: "Initialize frontend",
      description: "Create home page, and routing",
      dueDate: "2025-11",
      isCompleted: true,
      priority: "medium",
      assignedTo: null,
    },
    {
      id: "sdfkgsfssffosrsdsduhfgg",
      title: "Initialize frontend",
      description: "Create home page, and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "low",
      assignedTo: null,
    },
  ],
  filter: "all",
};
type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid()?.toLowerCase(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // updateTask: (state, action) => {},
    updateFilter: (
      state,
      action: PayloadAction<"low" | "medium" | "high" | "all">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};
export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
