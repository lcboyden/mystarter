import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import NoMatch from "./screens/NoMatch";
import NavBar from "./components/NavBar";
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from "./components/ProtectedRoute";
import Demo from "./screens/componentsDemo/Demo";
import Products from "./screens/products/Products";
import ProductView from "./screens/products/ProductView";

function App() {
  return (
    <>
    <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/demo" component={Demo} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductView} />
            <Route exact component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
