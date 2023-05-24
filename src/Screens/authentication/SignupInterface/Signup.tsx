import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import styles from '../auth.module.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { env } from '../../../configs/env/production';
import { SuccessBtn } from '../../../widgets/Button';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [lname, setLname] = useState('');
  const [fname, setFname] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
      }}>
      <Grid container spacing={2} style={{ padding: '10px' }}>
        <Grid item md={4}></Grid>
        <Grid item md={4} mt={10}>
          <Stack direction="column" spacing={2}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: 'rgb(42, 44, 44)',
                textAlign: 'center'
              }}>
              Create your account
            </Typography>
            <form method={'GET'}>
              <div className={styles.form_boundary}>
                <FormControl className={styles.form_boundary} fullWidth={true} variant="outlined">
                  <InputLabel htmlFor="email">Email address</InputLabel>
                  <OutlinedInput
                    id="email"
                    name={'email'}
                    required={true}
                    placeholder={'example@domain.com'}
                    type="email"
                    label={'Email address'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <FormHelperText id="email-helper-text">
                    {`We'll never share your email.`}
                  </FormHelperText>
                </FormControl>
              </div>

              <div className={styles.form_boundary}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth={true} variant="outlined">
                      <InputLabel htmlFor="last-name">Last name</InputLabel>
                      <OutlinedInput
                        id="last-name"
                        name={'last_name'}
                        required={true}
                        placeholder={'Doe'}
                        type="text"
                        label={'Last name'}
                        value={lname}
                        onChange={(event) => setLname(event.target.value)}
                      />
                      <FormHelperText id="lname-helper-text">Help</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth={true} variant="outlined">
                      <InputLabel htmlFor="first-name">Fist name</InputLabel>
                      <OutlinedInput
                        id="first-name"
                        name={'first_name'}
                        required={true}
                        placeholder={'Jane'}
                        type="text"
                        label={'First name'}
                        value={fname}
                        onChange={(event) => setFname(event.target.value)}
                      />
                      <FormHelperText id="fname-helper-text">Help</FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
              <div className={styles.form_boundary}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth={true} variant="outlined">
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <OutlinedInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end">
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        name={'password'}
                        value={password}
                        onChange={(event) => {
                          if (event.target.value.length < env.password_length)
                            setPassword(event.target.value);
                        }}
                      />
                      <FormHelperText id="pass-helper-text">Help</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth={true} variant="outlined">
                      <InputLabel htmlFor="confirm_password">Confirm Password</InputLabel>
                      <OutlinedInput
                        id="confirm_password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end">
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm Password"
                        value={cPassword}
                        onChange={(event) => {
                          if (event.target.value.length < env.password_length)
                            setCpassword(event.target.value);
                        }}
                      />
                      <FormHelperText id="cpass-helper-text">Help</FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
              <div className={styles.submit_button}>
                <SuccessBtn
                  text={'Sign Up'}
                  onClick={() => {
                    console.log('Sign Up');
                  }}
                />
                <div style={{ marginTop: '15px' }}>
                  <Typography>
                    Already have account?{' '}
                    <Link to={'/login'} style={{ color: '#069E85FF' }}>
                      Login
                    </Link>
                  </Typography>
                </div>
              </div>
            </form>
            <Divider />
            <Button size="large">Continue with Google</Button>
          </Stack>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </Box>
  );
};
