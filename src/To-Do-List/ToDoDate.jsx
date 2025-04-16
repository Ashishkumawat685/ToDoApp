import React, { useEffect } from "react";
import { useState } from "react";

export const ToDoDate = () => {
  // Date Section......................................
  const [Calender, setCalender] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const Datee = now.toLocaleDateString();
      const timee = now.toLocaleTimeString();
      setCalender(`${Datee} - ${timee}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="date_time">
        <h1>{Calender}</h1>
      </section>
    </>
  );
};
