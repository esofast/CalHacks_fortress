import { TextField, Typography, Box, Button } from "@mui/material";
import React, { useState, Fragment } from "react";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async () => {
    const response = await fetch("http://localhost:5001/login", {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ username: username, password: password }),
    });

    console.log(await response.json())
    // setResponse(await response.json());
    setSubmitted(true);
    if (!(username && password)) {
      setResponse(null);
    }
  };

  return (
    <Fragment>
      <div className="loginDiv">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            gap: "16px",
          }}
        >
          <Typography variant="h3">Login</Typography>
          <TextField
            label="Username"
            error={submitted && !username}
            autoFocus={true}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            label="Password"
            error={submitted && !password}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
        </Box>
      </div>
      <Button variant="outlined" sx={{ marginTop: "16px" }} onClick={onSubmit}>
        Submit
      </Button>
      {response && username && password && <Typography>Success!</Typography>}
    </Fragment>
  );
};

export default Login;
