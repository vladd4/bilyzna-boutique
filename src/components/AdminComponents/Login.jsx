"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { setAuthToken } from "../../utils/auth_helper";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (data) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/generateToken`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      const { token } = await response.json();
      setAuthToken(token);
      router.push("/admin");
    } else {
      setErrorMessage("Login failed. Try again!");
    }
    reset();
  };
  return (
    <div className="login-div">
      <h2 style={{ marginBottom: "2%" }}>Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          {...register("username")}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit" style={{ marginTop: "4%" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: "10px", color: "red" }}>{errorMessage}</p>
    </div>
  );
}
