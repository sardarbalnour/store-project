import { RotatingLines } from "react-loader-spinner";

import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines
        height="96"
        width="96"
        color="#fd5e42"
        strokeWidth="5"
        animationDuration="0.75"
      />
    </div>
  );
}

export default Loader;
