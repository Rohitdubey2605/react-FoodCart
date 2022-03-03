import styles from "./Fun.module.css";
import imgSource from "./../../assets/image.gif";

const Fun = (props) => {
//   console.log("FUN");
  return (
    <div>
        {/* <h1>FUN</h1> */}
      <img src={imgSource} className={styles.fun} alt="Kat Gya Bhai" />
    </div>
  );
};

export default Fun;
