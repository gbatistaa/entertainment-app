import { BsPersonCircle } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { PiFilmStripFill, PiTelevision } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./pageGuide.module.css";

export function PageGuide() {
  return (
    <div className={styles.pageGuide}>
      <Link to={"/home"}>
        <MdMovie size={30} className={styles.moviesLogo} />
      </Link>
      <nav className={styles.pagesNavigate}>
        <ul>
          <li>
            <Link to={"/home/main"}>
              <IoGrid size={20} className={styles.navIcons} />
            </Link>
          </li>

          <li style={{ transform: "rotate(90deg)" }}>
            <Link to={"/home/movies"}>
              <PiFilmStripFill size={20} className={styles.navIcons} />
            </Link>
          </li>

          <li>
            <Link to={"/home/tvseries"}>
              <PiTelevision size={20} className={styles.navIcons} />
            </Link>
          </li>

          <li>
            <Link to={"/home/bookmarked"}>
              <FaBookmark size={20} className={styles.navIcons} />
            </Link>
          </li>
        </ul>
      </nav>
      <Link to={"/profile"} style={{ marginTop: "auto" }}>
        <BsPersonCircle size={25} />
      </Link>
    </div>
  );
}
