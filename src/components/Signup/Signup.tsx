import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

export function Signup() {
  const navigate = useNavigate();

  const handleUserSignup = (event: FormEvent) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <form className={styles.signupForm} onSubmit={(e) => handleUserSignup(e)}>
      <p className={styles.signupHeading}>Sign Up</p>
      <input type="text" name="text" className={styles.inputSignup} placeholder="Email adress" autoComplete="off" />
      <input
        type="text"
        name="password"
        className={styles.inputSignup}
        placeholder="Your Password"
        autoComplete="off"
      />
      <input
        type="text"
        name="repeated-password"
        className={styles.inputSignup}
        placeholder="Reapeat your password"
        autoComplete="off"
      />
      <button type="submit" className={styles.signupButton}>
        Create an account
      </button>
      <p className={styles.linkLogin}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}
