import { useState } from "react";
import React from "react";
import { validation } from "../helpers/validation";

const Login = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "Email required",
    password: "Password required",
  });

  const changeHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const sumbitHandler = (event) => {
    event.preventDefault(login(userData));

    alert("Welcome!");
  };

  const disableHandler = () => {
    let disabled;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            placeholder="example@mail.com"
            required
          />
        </div>
        <span>{errors.email}</span>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            placeholder="password"
            required
          />
        </div>
        <span>{errors.password}</span>
        <button disabled={disableHandler()} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
