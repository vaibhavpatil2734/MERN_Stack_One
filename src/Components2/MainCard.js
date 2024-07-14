import React, { useState } from 'react';
import TaskForm from '../Components/TaskTool/TaskForm';
import TaskList from '../Components/TaskTool/TaskList';
import SearchTool from '../Components/SearchTool';
import CompletedTasksGraph from '../Components/CompletedTasksGraph'; // Import the graph component
import '../Components2/Style.css';
import About from '../Components/About';
import Blogs from '../Components/Blogs';
import TaskManager from '../Components/TaskTool/TaskManager';
import MyCreation from '../Components/MyCreation/MyCreation';

export default function MainCard(props) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <div className='bg-secondary'>
        <div className="video-background">
          {props.num === 1 ? (
            <video autoPlay loop muted>
              <source src=".\Y2meta.app-Black Hole Live Wallpaper-(1080p60).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div>
              <div className='accimg bg-mc' ></div>
            </div>
          )}
        </div>
        {props.num === 1 && <div><SearchTool/></div>}
        {props.num === 2 && <div><Blogs/></div>}
        {props.num === 3 && (
          <div>
            <TaskForm onAddTask={addTask}/>
            <TaskList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
            <CompletedTasksGraph tasks={tasks} /> {/* Include the graph component */}
          </div>
        )}
        {props.num === 4 && <div><MyCreation/></div>}
        {props.num === 100 && <div><About/></div>}
      </div>
    </div>
  );
}
