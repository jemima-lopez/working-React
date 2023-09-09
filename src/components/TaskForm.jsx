import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// eslint-disable-next-line react/prop-types
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle(""), setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-sm bg-white/10 p-10 mb-3 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white uppercase text-center mb-2">Create your task</h1>
        <input
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full md-2 mb-2"
          autoFocus
        />
        <textarea
          placeholder="Write your description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full md-2 mb-2"
        ></textarea>
        <button className="bg-blue-400 rounded-md px-2 py-2 mt-2 hover:bg-blue-300">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
