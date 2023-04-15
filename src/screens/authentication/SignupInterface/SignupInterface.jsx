import React from "react";
import { useSelector } from "react-redux";
import { MailConfirmation } from "./MailConfirmation";
import { PasswordScreen } from "./PasswordScreen";
import { Signup } from "./Signup";

export const SignupInterface = () => {
  const interfac = useSelector((state) => state.signup.signup_interface);

  console.log(interfac);
  return (
    <>
      {interfac === "interface1" && <Signup />}
      {interfac === "interface2" && <PasswordScreen />}
      {interfac === "interface3" && <MailConfirmation />}
    </>
  );
};
