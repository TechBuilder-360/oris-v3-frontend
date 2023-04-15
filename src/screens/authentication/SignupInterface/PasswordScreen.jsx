import React from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch } from "react-redux";
import { changeInterface } from "../../../Store/slices/StateManager";

export const PasswordScreen = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4}></Grid>
          <Grid item md={4} mt={20}>
            <Stack direction="column" spacing={2}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
              />

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "rgb(6, 158, 133)",
                  "&:hover": {
                    backgroundColor: "rgb(10, 192, 162)",
                  },
                }}
                onClick={() => dispatch(changeInterface("interface3"))}
              >
                Continue
              </Button>

              <Stack direction="row" spacing={1}>
                <Typography variant="body">Already have account?</Typography>
                <Typography
                  variant="body"
                  sx={{
                    color: "rgb(6, 158, 133)",
                  }}
                >
                  Login
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Box>
    </>
  );
};
