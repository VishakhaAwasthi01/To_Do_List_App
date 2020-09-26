import React from "react";
import "./App.css";
import { Input, List } from "./components";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: null,
      name: null,
      status: null,
    },
  ]);
  const [inProgress, setInProgress] = React.useState([
    {
      id: "",
      name: "",
      status: "",
    },
  ]);
  const [taskDone, setTaskDone] = React.useState([
    {
      id: "",
      name: "",
      status: "",
    },
  ]);

  const addTask = (task) => {
    const taskAdd = {
      id: Math.floor(Math.random() * 100 + 1),
      name: task,
      status: 0,
    };

    setTasks([...tasks, taskAdd]);
  };

  const statusChangetoProgress = (id) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) task.status ? (task.status = 0) : (task.status = 1);
      return task;
    });

    // setTasks([...updatedTask]);
    setInProgress([...updatedTask]);
  };

  const statusChangetoDone = (id) => {
    const DoneTask = tasks.map((task) => {
      if (task.id === id && task.status === 1) {
        task.status = 2;
      }
      return task;
    });

    setTaskDone([...DoneTask]);
  };
  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTaskDone(updatedTask);
  };

  return (
    <div className="listDiv">
      <Input addTask={addTask} />
      <List
        tasks={tasks}
        inProgress={inProgress}
        statusChange={statusChangetoProgress}
        statusChangetoDone={statusChangetoDone}
        taskDone={taskDone}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
