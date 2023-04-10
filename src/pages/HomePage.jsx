import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "./store/slices/userSlice";
import React from "react";
import { DocumentForm } from "../pages/InputFields";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <Stack spacing={2} direction="row">
        <Button className="buttonRemoveUser" onClick={() => dispatch(removeUser())} variant="contained">
          {" "}
          Выйти из аккаунта
        </Button>
      </Stack>

      <h3 className="document-name">
        Заполнение документа "РАБОЧАЯ ПРОГРАММА УЧЕБНОЙ ДИСЦИПЛИНЫ"
      </h3>
      <DocumentForm />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export { HomePage };
