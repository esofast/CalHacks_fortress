import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from './pages/Login';
import { Fragment, useState } from "react";
import SignUp from './pages/SignUp';

function App(props) {
  const [userId, setUserId] = useState('');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/signup"
            element={
              <Fragment>
                <NavBar curPage="Sign Up" />
                <SignUp />
              </Fragment>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <Fragment>
                <NavBar curPage="Login" />
                <Login />
              </Fragment>
            }
          />
          <Route
            path="/"
            element={
              <Fragment>
                <NavBar curPage="Home Page" />
                <HomePage />
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
