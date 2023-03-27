import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "./store/slices/userSlice";
import React from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Добро пожаловать</h1>

      <button onClick = {() => dispatch(removeUser())}> Выйти из аккаунта</button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export { HomePage };
