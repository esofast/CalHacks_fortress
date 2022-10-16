import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Fragment } from "react";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/raise"
            element={
              <Fragment>
                <NavBar curPage="Raise Funds" />
                {/* <About /> */}
              </Fragment>
            }
          />
          <Route
            exact
            path="/browse"
            element={
              <Fragment>
                <NavBar curPage="Browse" />
                {/* <About /> */}
              </Fragment>
            }
          />
          <Route
            exact
            path="/account"
            element={
              <Fragment>
                <NavBar curPage="Account" />
                {/* <About /> */}
              </Fragment>
            }
          />
          <Route
            exact
            path="/logout"
            element={
              <Fragment>
                <NavBar curPage="Logout" />
                {/* <Logout /> */}
              </Fragment>
            }
          />
          <Route
            exact
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
