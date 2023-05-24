import isEmail from 'validator/es/lib/isEmail';

export const validate_email = (email: string): boolean => {
  return isEmail(email);
};

// const validate_password = (txt: string, min: number, max: number): object => {};
