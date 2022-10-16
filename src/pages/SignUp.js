import { TextField, Typography, Box, Button } from "@mui/material";
import React, { useState, Fragment } from "react";
import "./Login.css";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);

  const onSubmit = async () => {
    const response = await fetch("https://localhost:5001/signup", {
      method: "POST",
      mode: "*cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ username: username, password: password }),
    });
    // console.log(await response.json());
    setResponse(await response.json());
    if (response.status != 200){
      alert("User already signed up");
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
          <Typography variant="h3">Sign Up</Typography>
          <TextField
            label="Username"
            error={response && !username}
            autoFocus={true}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            label="Password"
            error={response && !password}
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
    </Fragment>
  );
};

export default SignUp;
