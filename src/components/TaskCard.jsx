import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function TaskCard({ task }) {
  const {deleteTask} = useContext(TaskContext);

  return (
    <div className="backdrop-blur-sm bg-white/10 text-white p-3 rounded-md ">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-900 text-sm">{task.description}</p>
      <button className="bg-blue-400 rounded-md px-2 py-2 mt-2 hover:bg-blue-300" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
