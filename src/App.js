import { Route, Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import ListPost from "./pages/ListPost";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import history from "./util/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <DefaultLayout path="/" component={Home} exact />
          <DefaultLayout path="/profile" component={Profile} />
          <DefaultLayout path="/posts" component={ListPost} exact />
          <DefaultLayout path="/posts/:id" component={PostDetail} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
