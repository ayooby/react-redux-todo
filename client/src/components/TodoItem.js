import React, { Component } from "react";
import styled from "styled-components";
import { Edit2, Trash2, Square, CheckSquare } from "styled-icons/feather";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "../actions";

const CardItem = styled.div`
  background: #eee;
  padding: 10px 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const TodoText = styled.p`
    font-weight: 500
    margin-bottom: 0;
    color: black;
    &:hover,
    &:active {color: gray}
`;

const EditIcon = styled.span`
  margin: 0 2px;
  color: #22313f;
  cursor: pointer;
  transition: 0.3s color;
  &:hover,
  &:active {
    color: #1f3a93;
  }
`;

const TrashIcon = styled.span`
  color: #f1a9a0;
  cursor: pointer;
  transition: 0.3s color;
  margin: 0 2px;
  &:hover,
  &:active {
    color: #cf000f;
  }
`;
class TodoItem extends Component {
  state = { editing: false, text: this.props.todo.type };

  showEditForm = e => {
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  onInputChange = e => {
    this.setState({ text: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({ editing: !prevState.editing }));
    this.props.updateTodo(this.props.todo._id, this.state.text);
  };

  render() {
    const { todo, toggleTodo, deleteTodo } = this.props;

    return (
      <CardItem data-testid="todo-list">
        <div className="row">
          <div className="col-8">
            <span>
              <span onClick={() => toggleTodo(todo)} data-testid="checkbox">
                {todo.completed ? (
                  <CheckSquare size="20" style={{ marginRight: "5%" }} />
                ) : (
                  <Square size="20" style={{ marginRight: "5%" }} />
                )}
              </span>
              <TodoText
                style={{
                  display: !this.state.editing ? "inline" : "none",
                  textDecoration: todo.completed ? "line-through" : ""
                }}
              >
                {todo.type}
              </TodoText>
              <form
                className="form"
                style={{ display: this.state.editing ? "inline" : "none" }}
                onSubmit={this.onFormSubmit}
              >
                <input
                  onBlur={this.onFormSubmit}
                  value={this.state.text}
                  onClick={this.onInputClick}
                  onChange={this.onInputChange}
                ></input>
              </form>
            </span>
          </div>
          <div className="col-4 text-right">
            <EditIcon onClick={this.showEditForm} data-testid="edit-icon">
              <Edit2 size="20" />
            </EditIcon>
            <TrashIcon
              onClick={() => deleteTodo(todo._id)}
              data-testid="delete-todo"
            >
              <Trash2 size="20" />
            </TrashIcon>
          </div>
        </div>
      </CardItem>
    );
  }
}

export default connect(null, { toggleTodo, deleteTodo, updateTodo })(TodoItem);
