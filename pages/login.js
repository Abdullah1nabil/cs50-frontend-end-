import { login } from "../pages/api/api";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button, message, Upload } from "antd";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handelrequest = () => {
    login({ phone, password }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        if (result.obj) {
          // to show error message
          Object.keys(result.obj.err).forEach((el) =>
            message.error(result.obj.err[el])
          );
        } else {
          Object.keys(result.err).forEach((el) =>
            message.error(result.err[el])
          );
        }
      } else {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        router.replace("/");
      }
    });
  };
  return (
    <>
      <div className="main">
        <p className="sign" align="center">
          sign up
        </p>
        <form className="form1">
          <input
            type="text"
            className="un"
            align="center"
            placeholder="Username"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            className="pass"
            align="center"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a className="submit" align="center">
            <button onClick={handelrequest}>Sign in</button>
          </a>
          <p className="forget" align="centere">
            <a href="#">Forget Password</a>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
