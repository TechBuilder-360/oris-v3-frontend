import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

export const SuccessBtn = (props: any) => {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth={true}
      sx={{
        backgroundColor: 'rgb(6, 158, 133)',
        '&:hover': {
          backgroundColor: 'rgb(10, 192, 162)'
        }
      }}
      onClick={() => props.onClick()}
      disabled={props.disabled}>
      {props.text}
    </Button>
  );
};

SuccessBtn.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
