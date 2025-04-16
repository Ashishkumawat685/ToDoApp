import { useState } from "react";

export const ToDoForm = (props) => {
  const [List, setList] = useState({});
  const inputValue = (e) => {
    setList({ id: e, content: e, checked: false });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    props.todo(List);
    setList({ id: "", content: "", checked: "" });
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <div>
          <input
            onChange={(e) => inputValue(e.target.value)}
            type="text"
            className="to-do-input"
            autoComplete="off"
            value={List.content}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};
