import { Link } from "react-router-dom";
import styles from "./login.module.css";

export function Login() {
  return (
    <section className={styles.loginPage}>
      <div className={styles.loginDiv}>
        <p className={styles.loginHeading}>Login</p>
        <form>
          <input
            type="email"
            name="email"
            className={styles.inputLogin}
            placeholder="Email adress"
            autoComplete="off"
          />
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
      </div>
    </section>
  );
}
