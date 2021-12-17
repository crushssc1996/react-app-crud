import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./TodoList/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home"
import ListUser from "./Users/ListUser";

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo" >
              <ListTodo />
            </Route>
            <Route path="/user" >
              <ListUser />
            </Route>
          </Switch>
          </header>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
