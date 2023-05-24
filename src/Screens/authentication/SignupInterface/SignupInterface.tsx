import React from 'react';
import { useSelector } from 'react-redux';
import { MailConfirmation } from './MailConfirmation';
import { Signup } from './Signup';

export const SignupInterface = () => {
  const interfac = useSelector((state: any) => state.signup.signup_interface);

  return (
    <>
      {interfac === 'interface1' && <Signup />}
      {interfac === 'interface2' && <MailConfirmation />}
    </>
  );
};
