import React, { useState, createContext } from "react";
export const ContextAPI = createContext();

export const Studentdata = (props) => {
  const [rows, setRows] = useState([
    { id: "1", name: "Farhan", age: 25, course: "MERN", batch: "October" },
    { id: "2", name: "Faizan", age: 24, course: "MEAN", batch: "November" },
    { id: "3", name: "Salman", age: 20, course: "MERN", batch: "September" },
    { id: "4", name: "Shahrukh", age: 24, course: "MEAN", batch: "December" },
  ]);
  return (
    <ContextAPI.Provider value={[rows, setRows]}>
      {props.children}
    </ContextAPI.Provider>
  );
};

export default Studentdata;
