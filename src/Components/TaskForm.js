import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      phase,
      deadline,
      completed: false
    };
    onAddTask(newTask);
    setText('');
    setPhase('');
    setDeadline('');
  };

  return (
    <div className='tf'>
      <form onSubmit={handleSubmit}>
        <lebel className='fm'><b>Task Name : </b></lebel>
        <input
          className='fm'
          type="text"
          placeholder="Add new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <lebel className='fm'><b>Phase Name :</b> </lebel>
        <input
          className='fm'
          type="text"
          placeholder="Phase"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        />
        <br></br>
        <lebel className='fm'><b>Deadline : </b></lebel>
        <input
          className='fm'
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit" className='fm btn btn-outline-light'>Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
