import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { env } from '../../../configs/env/production';

export const PasswordScreen = (props: any) => {
  const style = {
    border: '1px solid black',
    borderRadius: '5px',
    padding: '4px',
    backgroundColor: 'grey',
    color: 'white',
    shadows: '2px 3px'
  };
  return (
    <>
      <div onClick={props.goBack} style={style}>
        {props.emailText}
      </div>
      <TextField
        id="outlined-basic"
        label="Password"
        value={props.value}
        variant="outlined"
        type="password"
        onChange={(event) => {
          if (event.target.value.length < env.password_length)
            props.changePassword(event.target.value);
        }}
      />
    </>
  );
};

PasswordScreen.propTypes = {
  value: PropTypes.string,
  emailText: PropTypes.string,
  goBack: PropTypes.func,
  changePassword: PropTypes.func,
  changeFragment: PropTypes.func
};
