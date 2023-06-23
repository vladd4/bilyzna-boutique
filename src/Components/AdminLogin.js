import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

async function setValues(setUser, setPass, navigate, log) {
  setUser(document.querySelector(".login-user").value);
  setPass(document.querySelector(".login-pass").value);
  const login = {
    username: document.querySelector(".login-user").value,
    password: document.querySelector(".login-pass").value,
  };
  await postLogin(login);
  if (log) {
    navigate("/admin");
    document.querySelector(".login-pass").style.borderColor = "black";
  } else {
    document.querySelector(".login-pass").style.borderColor = "red";
  }
}
async function postLogin(login) {
  fetch(`http://localhost:8080/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  })
    .then((response) => {
      if (response.ok) {
      } else {
        throw new Error("Failed to insert data");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
const AdminLogin = ({ log }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user, pass);
  }, [user, pass]);
  return (
    <div className="admin-login">
      <input className="login-user" placeholder="Введіть користувача"></input>
      <input
        type="password"
        className="login-pass"
        placeholder="Введіть пароль"
      ></input>
      <button
        className="login-submit"
        onClick={(e) => {
          setValues(setUser, setPass, navigate, log);
        }}
      >
        Увійти
      </button>
    </div>
  );
};
export default AdminLogin;
