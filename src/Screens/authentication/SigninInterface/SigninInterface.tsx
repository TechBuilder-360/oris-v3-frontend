import React, { useState } from 'react';
import { PasswordScreen } from './PasswordScreen';
import { EmailField } from './EmailField';
import { Stack } from '@mui/system';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { SuccessBtn } from '../../../widgets/Button';
import { validate_email } from '../../../validation/validator';

export const SigninInterface = () => {
  const [fragment, setFragment] = useState('email');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Hello');
  };

  const validateEmail = (e: string) => {
    setEmail(e);
    setEmailValid(validate_email(email));
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
              Login
            </Typography>
            {fragment === 'email' && (
              <EmailField
                value={email}
                changeEmail={validateEmail}
                emailValid={emailValid}
                changeFragment={() => setFragment('password')}
              />
            )}
            {fragment === 'password' && (
              <>
                <PasswordScreen
                  emailText={email}
                  value={password}
                  goBack={() => setFragment('email')}
                  changePassword={setPassword}
                  changeFragment={() => setFragment('email')}
                />
                <SuccessBtn text={'Sign In'} onClick={handleLogin} />
              </>
            )}
            <Stack direction="row" spacing={1}>
              <Typography>
                {`Don't have an account?`}{' '}
                <Link to={'/register'} style={{ color: '#069E85FF' }}>
                  Sign up
                </Link>
              </Typography>
            </Stack>
            <Divider />
            <Button size="large">Login with Google</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
