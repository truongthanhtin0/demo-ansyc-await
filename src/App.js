import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Login from "./pages/Login/index";
import ProductDetail from "./pages/ProductDetail/index";
import ProductList from "./pages/ProductList/index";
import Register from "./pages/Register/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DefaultLayout path="/" component={Home} exact />
          <DefaultLayout path="/product-list" component={ProductList} />
          <DefaultLayout path="/profile-detail" component={ProductDetail} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
