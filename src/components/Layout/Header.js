import { Fragment } from "react/cjs/react.production.min";
import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
          <h1>FoodCart</h1>
          <HeaderCartButton/>
      </header>
      <div className={styles['main-image']}>
          <img src={mealsImage} alt="A table full of delicious food!"/>
      </div>
    </Fragment>
  );
};

export default Header;
