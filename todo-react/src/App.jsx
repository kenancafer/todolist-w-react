import "./App.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => {
    setTodoInput(event.target.value);
  };
  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };
  const removeTodo = (value) => {
    setTodos((oldValues) => {
      return oldValues.filter((todos) => todos !== value);
    });
  };
  return (
    <>
      <Container>
        <h1 className="text-center my-5">TODO LIST</h1>
        <div>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Hedefinizi Giriniz..."
              value={todoInput}
              onChange={handleChange}
            />
            <Button onClick={addTodo} variant="warning" id="button-add1">
              Ekle
            </Button>
          </InputGroup>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} onClick={() => removeTodo(todo)}>
              {todo}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default App;
