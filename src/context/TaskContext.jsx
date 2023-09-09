/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    // eslint-disable-next-line react/prop-types
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        // eslint-disable-next-line react/prop-types
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
