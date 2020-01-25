import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const FormSection = styled.div`
  background: #eee;
  height: auto;
  padding: 30px 0;
`;

const Heading = styled.h5`
  text-align: center;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 6px;
  border: none;
  width: 100%;
  margin: 20px auto;

  &::placeholder {
    opacity: 0.7;
    font-size: 0.9em;
  }
`;

const Button = styled.button`
    background: ${props => (props.isButtonActive ? "#00baba" : "gray")};
    padding: 3px 10px;
    color: white;
    box-shadow: ${props =>
      props.isButtonActive ? "3px 3px 10px 2px #aaa" : ""};
    border: none;
    transition: 0.16s all;

    &:hover,
    &:active{box-shadow: ${props =>
      props.isButtonActive ? "3px 3px 10px 1px #aaa" : ""};

    &:active{box-shadow: none !important;}
`;

class NewTodo extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <FormSection>
        <div className="container">
          <Heading>Add Todos</Heading>
          <form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              placeholder="What have you got planned?"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <Button
              data-testid="add-button"
              type="submit"
              disabled={this.state.text.length === 0}
              isButtonActive={this.state.text.length > 0}
            >
              Add Todo
            </Button>
          </form>
        </div>
      </FormSection>
    );
  }
}

export default connect(null, { addTodo })(NewTodo);
