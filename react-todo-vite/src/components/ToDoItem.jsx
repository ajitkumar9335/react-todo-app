import { useState } from 'react';

function ToDoItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    onEdit(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div className="actions">
            <button onClick={handleSave}>Save</button>
          </div>
          
        </>
      ) : (
        <>
          <span onClick={() => onToggle(task.id)}>{task.text}</span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
