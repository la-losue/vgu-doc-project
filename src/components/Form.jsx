import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState(""); // переменные состояния 
  const [pass, setPass] = useState("");

  return (
    <div>

      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            className="form-control"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
        </div>

        <Stack spacing={2} direction="row" >
          <Button

            className="buttonRemoveUser"
            onClick={() => handleClick(email, pass)}
            variant="contained"
          >
            {title}
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export { Form };
