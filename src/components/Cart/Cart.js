import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[
        {
          id: "m1",
          name: "Paneer Butter Masala",
          description: " Paneer Butter Masala",
          price: 190,
        },
      ].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
          <span>Total Amount</span>
          <span>190</span>
      </div>
      <div className={styles.actions}>
          <button className={styles['button--alt']}>Close</button>
          <button className={styles['button']}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
