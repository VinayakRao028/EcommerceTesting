import React from 'react';
import styles from '../styles/Cart.module.css';

const Cart: React.FC = () => {
  return (
    <div className={styles.cartContainer}>
      <section className={`${styles.pageHeader} ${styles.aboutHeader}`}>
        <h2>#Let's talk</h2>
        <p>Leave a message we love to hear from you!</p>
      </section>

      <section className={`${styles.cart} ${styles.sectionP1}`}>
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>Remove</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => (
              <tr key={item}>
                <td><button className={styles.removeBtn}><i className="far fa-times-circle"></i></button></td>
                <td><img src={`/images/products/f${item}.jpg`} alt={`Product ${item}`} /></td>
                <td>Cartoon Astronaut T-Shirt</td>
                <td>$118.3</td>
                <td><input type="number" defaultValue={1} min={1} className={styles.quantityInput} /></td>
                <td>$118.3</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={`${styles.cartAdd} ${styles.sectionP1}`}>
        <div className={styles.coupon}>
          <h3>Apply Coupon</h3>
          <input type="text" placeholder="Enter your coupon" className={styles.couponInput} />
          <button className={styles.normalBtn}>Apply</button>
        </div>
        <div className={styles.subtotal}>
          <h3>Cart Totals</h3>
          <table className={styles.totalTable}>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>$ 335</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>$ 335</strong></td>
              </tr>
            </tbody>
          </table>
          <button className={styles.normalBtn}>Proceed to Checkout</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;