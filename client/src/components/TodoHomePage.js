import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./NewTodo";

const HomePage = () => {
  return (
    <div className="container my-4">
      <div className="row mt-5">
        <div className="col-lg-7 col-sm-12">
          <TodoList />
        </div>
        <div className="col-lg-5 col-sm-12">
          <AddTodo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
