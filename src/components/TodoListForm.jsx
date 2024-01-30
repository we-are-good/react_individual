import React, { useState } from "react";
import TodoListAdd from "./TodoListAdd";
import Header from "./Header";
import TodoListDelete from "./TodoListDelete";

function TodoListForm() {
  const [toDoTitle, setTodoTitle] = useState("");
  const [toDoContent, setToDoContent] = useState("");
  const [date, setDate] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [sortOrder, setSortOrder] = useState();

  function todoDate(event) {
    setDate(event.target.value);
  }
  function toDoContentChange(event) {
    setToDoContent(event.target.value);
  }
  function toDoTitleChange(event) {
    setTodoTitle(event.target.value);
  }

  const todoListNewAddition = () => {
    const newTodoList = {
      id: todoList.length + 1,
      title: toDoTitle,
      content: toDoContent,
      date: date,
      isDone: false,
    };
    if (!newTodoList.title || !newTodoList.content) {
      return alert("할 일을 등록해주세요.");
    }
    setTodoList((todoList) => [newTodoList, ...todoList]);
    setTodoTitle("");
    setToDoContent("");
    setDate("");
  };

  const isDoneToggle = (item) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todoList) => {
        if (todoList.id === item) {
          return {
            ...todoList,
            isDone: !todoList.isDone,
          };
        }
        return todoList;
      })
    );
  };

  const doneList = todoList.filter((prevTodos) => prevTodos.isDone);
  const workingList = todoList.filter((prevtodos) => !prevtodos.isDone);

  const todoListNewdelete = (item) => {
    const todoListDelete = todoList.filter((todo) => todo.id !== item);
    setTodoList(todoListDelete);
    setTodoTitle("");
    setToDoContent("");
    setDate("");
  };

  const onChangeSortOrder = (event) => {
    const nextSortOrder = event.target.value;
    setSortOrder(nextSortOrder);

    if (nextSortOrder === "asc") {
      setTodoList((prevTodos) =>
        [...prevTodos].sort((a, b) => new Date(a.date) - new Date(b.date))
      );
      return;
    }
    setTodoList((prevTodos) =>
      [...prevTodos].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  return (
    <>
      <Header sortOrder={sortOrder} onChangeSortOrder={onChangeSortOrder} />
      <article className="top-article-style">
        <header className="toDoList-input-style">
          <input
            className="toDoList-title-style"
            required
            maxLength={10}
            placeholder="Todo List"
            type="text"
            value={toDoTitle}
            onChange={toDoTitleChange}
          />

          <input
            className="toDoList-content-style"
            required
            placeholder="Todo Context"
            type="text"
            value={toDoContent}
            onChange={toDoContentChange}
          />

          <input
            className="toDoList-date-style"
            required
            type="date"
            value={date}
            onChange={todoDate}
          />
        </header>

        <footer className="two-button-style">
          <TodoListDelete
            todoListNewdelete={todoListNewdelete}
            todoList={todoList}
          />
          <button onClick={todoListNewAddition} className="add-button-style">
            Add
          </button>
        </footer>
      </article>
      <div className="top-nav-style"> working </div>
      {workingList.map((workingList) => (
        <TodoListAdd
          key={workingList.id}
          todoList={workingList}
          todoListNewdelete={todoListNewdelete}
          isDoneToggle={isDoneToggle}
        />
      ))}
      <div className="top-nav-style"> Done</div>

      {doneList.map((doneList) => (
        <TodoListAdd
          key={doneList.id}
          todoList={doneList}
          todoListNewdelete={todoListNewdelete}
          isDoneToggle={isDoneToggle}
        />
      ))}
    </>
  );
}

export default TodoListForm;
