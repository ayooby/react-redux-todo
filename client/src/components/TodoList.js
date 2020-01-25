import React, { Component } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

const TodoSection = styled.div`
  margin-bottom: 80px;
`;

class TodoList extends Component {
  componentDidMount = async () => {
    this.props.fetchTodos();
  };

  render() {
    const { todos } = this.props;
    if (todos.length > 0) {
      return (
        <TodoSection data-testid="todo-section">
          {todos.map(todo => {
            return (
              <TodoItem
                todo={todo}
                key={todo._id}
              />
            );
          })}
        </TodoSection>
      );
    }
    return (
      <div className={`text-center`} data-testid="empty-todo-container">
        <h4>No todos</h4>
        <p>Use the form to add a new todo</p>
      </div>
    );
  }
}
const mapStateToProps = ({ todos }) => {
  return { todos };
};

export default connect(mapStateToProps, {
  fetchTodos,
})(TodoList);
