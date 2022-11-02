import React from "react";
import {createGlobalStyle} from "styled-components";
import { TodoProvider } from "./components/TodoContext";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Gowun Dodum";
  }
  body {
    background: #DEF5E5;
  }`;

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
          <TodoCreate></TodoCreate>
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
}

export default App;
