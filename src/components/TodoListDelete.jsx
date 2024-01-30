import React from "react";

function TodoListDelete({ todoListNewdelete, todoList }) {
  return (
    <div>
      <button
        onClick={() => {
          todoListNewdelete(todoList.id);
        }}
        className="delete-button-style"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoListDelete;
