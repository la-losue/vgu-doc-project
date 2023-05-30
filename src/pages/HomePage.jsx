// import { useAuth } from "hooks/useAuth";
// import { useDispatch } from "react-redux";
// import { removeUser } from "./store/slices/userSlice";
import { Navigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { DocumentForm } from "../pages/InputFields";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { tokenContext } from "context/tokenContext";

const HomePage = () => {
  // const dispatch = useDispatch();
  // const { isAuth, email } = useAuth();

  const {token, setToken} = useContext(tokenContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    setToken(token)
  }, [token])

  const isAuth = false;
  return isAuth ? (
    <div>
      

      <h1>Личный кабинет</h1>
      <h2>Создать учебную программу</h2>
      <ul>
        <li className="educational-plan-list">
          <Link className="link" to="/workProgramm">
            Учебный план -"Направление 09.03.01 Информатика и вычислительная
            техника"
          </Link>
        </li>

        <li className="educational-plan-list">
          <Link className="link" to="">
            Учебный план -""
          </Link>
        </li>

        <li className="educational-plan-list">
          <Link className="link" to="">
            Учебный план -""
          </Link>
        </li>
      </ul>

      <Stack spacing={2} direction="row">
        <Button
          className="buttonRemoveUser"
          onClick={() => console.log(1)}
          variant="contained"
        >
          {" "}
          Выйти из аккаунта
        </Button>
      </Stack>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export { HomePage };
