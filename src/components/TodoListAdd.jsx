import React from "react";
import TodoListDelete from "./TodoListDelete";

function TodoListAdd({ todoList, todoListNewdelete, isDoneToggle }) {
  const { id, title, content, date, isDone } = todoList;
  const newDate = new Date(date);
  const americaDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  return (
    <div className="two-item-sort">
      <article className="top-article-style">
        <header className="toDoList-input-style">
          <div className="toDoList-title-style">{title}</div>
          <div classNames="toDoList-content-style">{content}</div>
          <div className="toDoList-date-style">{americaDate}</div>
        </header>

        <footer className="two-button-style">
          <TodoListDelete
            todoListNewdelete={todoListNewdelete}
            todoList={todoList}
          />
          <button className="add-button-style" onClick={() => isDoneToggle(id)}>
            {isDone ? "취소" : "완료"}
          </button>
        </footer>
      </article>
    </div>
  );
}

export default TodoListAdd;
