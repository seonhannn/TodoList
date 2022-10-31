import React from "react";
import {createGlobalStyle} from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #BCCEF8;
  }`;

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
        </TodoTemplate>
    </div>
  );
}

export default App;
