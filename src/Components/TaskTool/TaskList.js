import React from 'react';
import { FaCheck, FaTrash, FaBullseye } from 'react-icons/fa';

function TaskList({ tasks, onCompleteTask, onDeleteTask }) {
  // Function to group tasks by phases
  const groupTasksByPhase = () => {
    const groupedTasks = {};
    tasks.forEach(task => {
      if (!groupedTasks[task.phase]) {
        groupedTasks[task.phase] = [];
      }
      groupedTasks[task.phase].push(task);
    });
    return groupedTasks;
  };

  const groupedTasks = groupTasksByPhase();

  return (
    <div className='tl'>
      {Object.keys(groupedTasks).map(phase => (
        <div key={phase}>
          <h3>
            {/* Icon for phase */}
            <span style={{ marginRight: '5px' }}>
              <FaBullseye />
            </span>
            {phase}
          </h3>
          <ul>
            {groupedTasks[phase].map(task => (
              <li key={task.id}>
                {/* Checkbox icon */}
                <span style={{ marginRight: '5px' }}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onCompleteTask(task.id)}
                  />
                </span>
                {/* Task text */}
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                {/* Deadline */}
                <pre></pre> 
                <span className='text-primary'>{task.deadline}</span>
                {/* Delete button icon */}
                <span style={{ marginLeft: '10px', cursor: 'pointer' }}>
                  <FaTrash onClick={() => onDeleteTask(task.id)} />
                </span>
                <hr class="hr" />
                
              </li>

            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
