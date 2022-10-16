import React, { Fragment, useState } from "react";
import { Box, Button, Typography, Slider, Stack } from "@mui/material";
import "./Form.css";
import { sortJSON } from "../utils/utils";

const Form = (props) => {
  const [happiness, setHappiness] = useState(0);

  const distance = (x1, x2, y1, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const onSubmit = () => {
    sortJSON();
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
    </Fragment>
  );
};

export default Form;
