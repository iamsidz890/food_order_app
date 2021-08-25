import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Chicken Rara", amount: 1, price: 200 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>300</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart ;
