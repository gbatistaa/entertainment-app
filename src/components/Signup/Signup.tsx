import { Link } from "react-router-dom";
import styles from "./login.module.css";

export function SignUp() {
  return (
    <section className={styles.loginPage}>
      <div className={styles.loginDiv}>
        <h1>Login</h1>
        <form>
          <input type="text" name="email" id="" className={styles.inputLogin} />
          <input type="password" name="password" id="" className={styles.inputLogin} />
          <button type="submit">Login to your account</button>
        </form>
        <p>
          Already <Link to="/login" />
        </p>
      </div>
    </section>
  );
}
