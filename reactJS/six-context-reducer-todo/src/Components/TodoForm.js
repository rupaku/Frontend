import React, { useState, useContext } from "react"
import {
  FormGroup,
  Input,
  InputGroup,
  Form,
  Button,
  InputGroupAddon,
} from "reactstrap"
import { v4 } from "uuid"
import { TodoContext } from "../context/TodoContext"
import { ADD_TODO } from "../context/action.types"

const TodoForm = () => {
  const [todoString, setTodoString] = useState("")
  const { dispatch } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todoString === "") return alert("Please enter a todo")
    const todo = {
      todoString,
      id: v4(),
    }
    dispatch({
      type: ADD_TODO,
      payload: todo,
    })
    setTodoString("")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Please write your next todo activity"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button
              color="warning" // TODO: onclick
            >
              {" "}
              Add{" "}
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  )
}

export default TodoForm
