import ToDoItem from './ToDoItem';

function ToDoList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="empty">No tasks added yet!</p>
      ) : (
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;
