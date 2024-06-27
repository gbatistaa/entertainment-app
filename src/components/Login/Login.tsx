import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

export function Login() {
  const navigate = useNavigate();

  const handleUserLogin = (event: FormEvent) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <form className={styles.loginForm} onSubmit={(e) => handleUserLogin(e)}>
      <p className={styles.loginHeading}>Login</p>
      <input type="text" name="email" className={styles.inputLogin} placeholder="Email adress" autoComplete="off" />
      <input
        type="password"
        name="password"
        className={styles.inputLogin}
        placeholder="Your password"
        autoComplete="off"
      />
      <button type="submit" className={styles.loginButton}>
        Login to your account
      </button>
      <p className={styles.linkSignup}>
        Do not have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </form>
  );
}
