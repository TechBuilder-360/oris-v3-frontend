import React from "react";
import { Typography, Box, Grid } from "@mui/material";

export const MailConfirmation = () => {
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
            <Typography variant="h5">
              Check your mail for Confirmation Message to procceds.
            </Typography>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Box>
    </>
  );
};
