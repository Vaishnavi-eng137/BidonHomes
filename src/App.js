import './App.css';
import Login  from "./pages/login"
import List from "./pages/list"
import Form from "./pages/form"
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
        <Login/>
        </Route>
        <Route path="/form" exact>
        <Form/>
        </Route>
        <Route path="/list" exact>
        <List/>
        </Route>
     </Switch>
    </div>
  );
}

export default App;
