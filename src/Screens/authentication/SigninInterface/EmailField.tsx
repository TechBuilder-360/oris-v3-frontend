import React from 'react';
import { TextField } from '@mui/material';
import styles from '../auth.module.css';
import PropTypes from 'prop-types';
import { SuccessBtn } from '../../../widgets/Button';

export const EmailField = (props: any) => {
  return (
    <>
      <div className={styles.form_boundary}>
        <TextField
          fullWidth={true}
          id="email"
          name={'email'}
          required={true}
          placeholder={'example@domain.com'}
          type="email"
          label={'Email address'}
          value={props.value}
          onChange={(event) => props.changeEmail(event.target.value)}
        />
      </div>

      <SuccessBtn disabled={!props.emailValid} onClick={props.changeFragment} text={'Continue'} />
    </>
  );
};

EmailField.propTypes = {
  value: PropTypes.string,
  emailValid: PropTypes.bool,
  changeEmail: PropTypes.func,
  changeFragment: PropTypes.func
};
