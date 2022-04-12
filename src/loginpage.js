import logo from "./logo.svg";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./App.scss";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const centerVariant = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        delay: 1.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const divVariant = {
    initial: {
      "--tranOr": "0px 50%",
      "--marLeft": "0px",
    },
    enter: {
      "--tranOr": "-300px 50%",
      "--marLeft": "300px",
      transition: {
        delay: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 0.5,
      },
    },
    exit: {
      // opacity: 0,
      "--tranOr": "0px 50%",
      "--marLeft": "0px",
      transition: {
        delay: 0.5,
        // ease: [0.43, 0.13, 0.23, 0.96],
        duration: 0.5,
      },
    },
  };

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
      <div class="div-center container">
        <motion.div
          variants={divVariant}
          initial="initial"
          animate="enter"
          exit="exit"
          className="top"
        ></motion.div>
        <motion.div
          variants={divVariant}
          initial="initial"
          animate="enter"
          exit="exit"
          className="bottom"
        ></motion.div>
        <motion.div
          variants={centerVariant}
          initial="initial"
          animate="enter"
          exit="exit"
          class="content center"
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;
