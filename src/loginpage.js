import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user1 = {
    email: "neejorchakma@gmail.com",
    password: "neejor",
    name: "Neejor",
    PumpId: 1,
  };
  const user2 = {
    email: "ayushkokande@gmail.com",
    password: "ayush",
    name: "Ayush",
    PumpId: 2,
  };
  const thresholdEditor = () => {
    if (email === user1.email && password === user1.password)
      navigate("/thresholdchange", { state: user1 });
    else if (email === user2.email && password === user2.password)
      navigate("/thresholdchange", { state: user2 });
    else alert("Invalid user.");
  };

  return (
    <div class="back">
      <div class="div-center">
        <div class="content">
          <h3>Login</h3>
          <hr />
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              class="btn btn-danger"
              onClick={thresholdEditor}
            >
              Log in
            </button>

            <hr />
            <button type="button" class="btn btn-link">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
