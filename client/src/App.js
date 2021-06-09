import "./App.css";
import Home from "./pages/home/Home";
// import TopBar from "./topbar/TopBar";
import TopBar from "./components/topbar/TopBar.jsx";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";

import Single from "./pages/single/Single";
// import TopBar from "./components/";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
{
  /* <Home></Home>
      <Single></Single>
      <Write></Write>
      <Settings></Settings>
      <Login></Login>
      <Register></Register> */
}

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write></Write> : <Register />}</Route>
        <Route path="/settings">
          {user ? <Settings></Settings> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single></Single>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
