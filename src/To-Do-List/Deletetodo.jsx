import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
export const DeleteToDo = ({
  checked,
  onHandleCheckedTodo,
  item,
  handledelete,
}) => {
  // DeleteToDo ................................

  return (
    <>
      <li>
        <div>
          <span className={checked ? "checked" : "notchecked"}>{item}</span>
        </div>
        <div>
          <span onClick={() => onHandleCheckedTodo(item)}>
            <CiCircleCheck
              style={{
                background: "green",
                color: "white",
                borderRadius: "50%",
                fontSize: "20px",
                fontWeight: "bolder",
                cursor: "pointer",
                margin: "0px 10px",
              }}
            />
          </span>
          <span onClick={() => handledelete(item)}>
            <MdDeleteForever
              style={{
                background: "red",
                borderRadius: "50%",
                color: "white",
                fontSize: "20px",
                fontWeight: "bolder",
                cursor: "pointer",
                margin: "0px 10px",
              }}
            />
          </span>
        </div>
      </li>
    </>
  );
};
