import { FormEvent, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { UserAuthenticationComponent } from "./user-authentication-component";
import { login } from "./user-authentication-reducer";

const mapDispatchToProps = { login };

const connector = connect(null, mapDispatchToProps);

export type UserAuthenticationProps = ConnectedProps<typeof connector>;

export const SignIn = connector(({ login }: UserAuthenticationProps) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(value.email);
  };

  return (
    <UserAuthenticationComponent
      handleSubmit={handleSubmit}
      value={value}
      handleChange={handleChange}
    />
  );
});
