import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import ListPost from "./pages/ListPost";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DefaultLayout path="/" component={Home} exact />
          <DefaultLayout path="/profile" component={Profile} />
          <DefaultLayout path="/posts" component={ListPost} exact />
          <DefaultLayout path="/posts/:id" component={PostDetail} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
