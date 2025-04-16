import { useEffect, useState } from "react";
import "./To-Do-list.css";
import { ToDoDate } from "./ToDoDate";
import { ToDoForm } from "./todoform";
import { DeleteToDo } from "./Deletetodo";

function ToDoList() {
  // To-Do-form...............................
  const todokey = "ReactTodo";

  function getlist() {
    const rowTodo = localStorage.getItem(todokey);
    if (!rowTodo) return [];
    return JSON.parse(rowTodo);
  }

  const [task, settask] = useState(() => getlist());

  const formSubmit = ({ id, content, checked }) => {
    if (!content) return;

    const ifTodyContnetMatch = task.find(
      (CurTask) => CurTask.content === content
    );
    if (ifTodyContnetMatch) return;
    settask((prev) => [
      ...prev,
      { id: id, content: content, checked: checked },
    ]);
  };
  localStorage.setItem(todokey, JSON.stringify(task));

  // DeleteToDo ................................
  const HandleDelete = (e) => {
    const updatetask = task.filter((taskdata) => taskdata.content !== e);
    settask(updatetask);
  };

  // Checked and unChecked todo.......................
  function HandleCheckedTodo(listitem) {
    const updatedTask = task.map((CurTask) => {
      if (CurTask.content === listitem) {
        return {
          ...CurTask,
          checked: !CurTask.checked,
        };
      } else {
        return CurTask;
      }
    });
    settask(updatedTask);
  }
  // Clear All

  const ClearAll = () => {
    settask([]);
  };

  return (
    <>
      <div className="main_container">
        <div className="container">
          <header>
            <h1>To-Do-List</h1>
          </header>

          {/* import date file................................ */}
          <ToDoDate />

          <section className="Form">
            {/* import form file................................ */}
            <ToDoForm todo={formSubmit} />

            <section className="list_content">
              <ul>
                {task.map((ListData) => {
                  return (
                    <>
                      {/* import delete file................................ */}

                      <DeleteToDo
                        key={ListData.id}
                        item={ListData.content}
                        handledelete={HandleDelete}
                        checked={ListData.checked}
                        onHandleCheckedTodo={HandleCheckedTodo}
                      />
                    </>
                  );
                })}
              </ul>
            </section>

            <div className="ClearBtn">
              <button onClick={ClearAll}>Clear All</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export { ToDoList };
