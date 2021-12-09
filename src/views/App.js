import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./TodoList/ListTodo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ListTodo />
    </div>
  );
}

export default App;
