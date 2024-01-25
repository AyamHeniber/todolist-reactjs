import { useEffect, useState } from "react";
import design from "./todolist.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");
  const [businesspersonal, setBusinessPersonal] = useState("");

  const getTopic = (e) => {
    setTopic(e.target.value);
  };
  const getDetails = (e) => {
    setDetails(e.target.value);
  };
  const getBusinessPersonal = (e) => {
    setBusinessPersonal(e.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      topic,
      details,
      businesspersonal,
    };

    setTodos([...todos, newTodo]);

    setTopic("");
    setDetails("");
    setBusinessPersonal("");
  };

  return (
    <div
      className={` bg-black h-auto w-screen flex justify-evenly ${design.container}`}
    >
      <div className={`bg-black text-center pt-10 ${design.todoadd}`}>
        <h1 className=" text-3xl shadow-3xl font-extrabold">TODO LIST</h1>
        <div className={`${design.inputdiv}`}>
          <input id="topictextbox"
            type="text"
            placeholder="Enter the topic here..."
            value={topic}
            onChange={getTopic}
          />
          <input
          id="detailstextbox"
            value={details}
            onChange={getDetails}
            placeholder="Enter your todo details here..."
            type="text"
          />
          <div className={`${design.radiobtn}`}>
            <input
              value="Business"
              checked={businesspersonal === "Business"}
              onChange={getBusinessPersonal}
              type="radio"
              name="r"
            />
            <label htmlFor="">Business</label>
            <input
              value="Personal"
              checked={businesspersonal === "Personal"}
              onChange={getBusinessPersonal}
              type="radio"
              name="r"
            />
            <label htmlFor="">Personal</label>
          </div>
          <button className={`${design.addbtn}`} onClick={addTodo}>
            ADD TODO
          </button>
        </div>
      </div>
      <div
        id="tododisplay"
        className={`display flex flex-wrap ${design.tododisplay}`}
      >
        {todos.map((todo, index) => {
          let deleteele = () => {
            let tododiv = document.getElementById(`todo-${index}`);
            tododiv.remove();
          };
          let edit=(e)=>{
            setTopic(todo.topic)
            setDetails(todo.details)
            setBusinessPersonal(todo.businesspersonal)
            deleteele();
          }
          return (
            <div key={index} id={`todo-${index}`}>
              <div className={design.tododisplaydetials}>
                <p className={`p-${index}`}>Topic: {todo.topic}</p>
                <p className={`p-${index}`}>Type: {todo.businesspersonal}</p>
                <p className={`p-${index}`}>Details: {todo.details}</p>
              </div>
              <div className={design.tododisplaybtn}>
                <button onClick={edit}>Edit</button>
                <button onClick={deleteele}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
