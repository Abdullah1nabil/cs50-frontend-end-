import Link from "next/link";
import { useState } from "react";
import { Regsiter } from "./api/api";
import { Button, message, Upload } from "antd";
import { useRouter } from "next/router";

const Singup = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [First, setFirst] = useState("");
  const [last, setLast] = useState("");
  const router = useRouter();

  const handelRequest = () => {
    Regsiter(
      {
        phone,
        password,
        First,
        last,
      },
      (err, result) => {
        if (err) throw err;
        if (!result.status) {
          if (result.err.notValid) {
            Object.keys(result.err.notValid).forEach((el) =>
              message.error(result.err.notValid[el])
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
      }
    );
  };
  return (
    <>
      <div className="container">
        <div className="box-signup">
          <h2 className="h2">
            the autisum platform
            <br />
            sign up
          </h2>
          <div className="content-signup">
            <input
              className="input"
              type="text"
              placeholder="First name"
              value={First}
              onChange={(e) => setFirst(e.target.value)}
            />
            <br />
            <input
              className="input"
              type="text"
              placeholder="Last name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
            <br />
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              className="input"
              type="tel"
              placeholder="phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <input className="input" type="text" placeholder="City" />
            <br />
            <input className="input" type="text" placeholder="admin" />
            <br />
            <div className="last-line">
              <textarea
                className="textarea"
                name="description"
                id="desc"
                cols="§0"
                rows="3"
                placeholder="write your descriptoin here"
              ></textarea>
              <input
                className="upload"
                type="file"
                name="fileToUpload"
                id="fileToUpload"
              />
            </div>
            <br />
            {/* <Link href="#"> */}
            <a className="btn" align="center">
              <button onClick={handelRequest}>Sign in</button>
            </a>
            {/* </Link> */}

            <Link href="/login">
              <a className="link" align="center">
                Sign in
              </a>
            </Link>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default Singup;
