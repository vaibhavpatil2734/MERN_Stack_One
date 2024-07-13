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
        <label className='fm'><b>Task Name : </b></label>
        <input
          className='fm'
          type="text"
          placeholder="Add new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label className='fm'><b>Phase Name :</b> </label>
        <input
          className='fm'
          type="text"
          placeholder="Phase"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        />
        <br />
        <label className='fm'><b>Deadline : </b></label>
        <input
          className='fm'
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit" className='fm btn btn-outline-light'>Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
