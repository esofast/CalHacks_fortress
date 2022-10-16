import React, { Fragment, useState } from "react";
import { Box, Button, Typography, Slider, Stack, Paper } from "@mui/material";
import "./Form.css";
import { sortJSON } from "../utils/utils";

const Form = (props) => {
  const [happiness, setHappiness] = useState(0);
  const [songs, setSongs] = useState([]);
  const [showSongs, show] = useState(false);

  const onSubmit = async () => {
    setSongs(sortJSON(happiness).slice(0, 30).sort(() => Math.random() - 0.5).slice(0, 10));
    show(true);
  };

  const onClick = async () => {
    const response = await fetch()
  };

  return (
    <Fragment>
      <div className="div">
        <Box sx={{ width: "50%" }}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Typography variant="body1">Sad</Typography>
            <Slider
              sx={{ marginBottom: "12px" }}
              defaultValue={50}
              value={props.state}
              onChange={(event, newValue) => setHappiness(newValue)}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
            <Typography variant="body1">Happy</Typography>
          </Stack>
        </Box>
      </div>
      <Button variant="outlined" sx={{ marginTop: "16px" }} onClick={onSubmit}>
        Submit
      </Button>
      <div className="divLeft">
        <Box sx={{ width: "30%" }}>
          {showSongs && (
            <Fragment>
              <h2>Top 10 Song Recommendations</h2>
              {songs.map((song) => {
                return (
                  <Paper
                    elevation={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      padding: "12px",
                      alignItems: "flex-start",
                      margin: "8px",
                    }}
                    onClick={() => onClick(song)}
                  >
                    <Typography>Title: {song[0]}</Typography>
                    <Typography>Artist: {song[1]}</Typography>
                    <Typography>Album: {song[2]}</Typography>
                  </Paper>
                );
              })}
            </Fragment>
          )}
        </Box>
      </div>
    </Fragment>
  );
};

export default Form;
