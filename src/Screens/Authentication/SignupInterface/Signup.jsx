import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { OldSocialLogin as SocialLogin } from "react-social-login";
import { useDispatch } from "react-redux";
import { changeInterface } from "../../../Store/slices/StateManager";
export const Signup = () => {
  const dispatch = useDispatch();
  const handleSocialLogin = (user) => {
    console.log(user);
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  // const handleSubmit = () => {};
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
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "rgb(42, 44, 44)",
                  textAlign: "center",
                }}
              >
                Create your account
              </Typography>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                type="email"
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
                onClick={() => dispatch(changeInterface("interface2"))}
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
              <Divider />

              <SocialLogin
                provider="google"
                appId=""
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
              >
                <Button
                  variant="outline"
                  size="large"
                  sx={{
                    color: "rgb(6, 158, 133)",
                    "&:hover": {
                      color: "rgb(10, 192, 162)",
                    },
                  }}
                >
                  Continue with Google
                </Button>
              </SocialLogin>
            </Stack>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Box>
    </>
  );
};
