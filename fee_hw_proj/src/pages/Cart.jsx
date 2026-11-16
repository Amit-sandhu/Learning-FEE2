import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart, clearCart } from "../features/cart/cartSlice";
import SectionHeading from "../components/SectionHeading";

// Let shoppers update quantities and review their order total.
function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(function (state) {
    return state.cart.items;
  });

  const totalPrice = cartItems.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);
  const totalItems = cartItems.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);

  function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
  }

  if (cartItems.length === 0) {
    return (
      <section className="page-section">
        <SectionHeading eyebrow="Your bag" title="Your cart is taking a little breather." description="Good things are waiting to be discovered." />
        <div className="empty-state cart-empty">
          <span className="empty-icon">♡</span>
          <h2>Your cart is empty</h2>
          <p>When something catches your eye, add it here.</p>
          <Link to="/products" className="button">Explore the collection ↗</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <SectionHeading eyebrow="Your bag" title="A few good things." description="Review your picks, adjust quantities, and get ready for checkout." />
      <div className="cart-layout">
        <div className="cart-items-panel">
          <div className="cart-table-heading"><span>{totalItems} items in your bag</span><button type="button" className="clear-cart-button" onClick={function () { dispatch(clearCart()); }}>Clear cart</button></div>
          {cartItems.map(function (item) {
            return (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p className="product-category">{item.category}</p>
                  <h3>{item.name}</h3>
                  <p className="cart-unit-price">{formatPrice(item.price)} each</p>
                  <button className="remove-link" type="button" onClick={function () { dispatch(removeFromCart(item.id)); }}>Remove</button>
                </div>
                <div className="quantity-control" aria-label={"Quantity for " + item.name}>
                  <button type="button" aria-label="Decrease quantity" onClick={function () { dispatch(decreaseQuantity(item.id)); }}>−</button>
                  <span>{item.quantity}</span>
                  <button type="button" aria-label="Increase quantity" onClick={function () { dispatch(increaseQuantity(item.id)); }}>+</button>
                </div>
                <strong className="cart-line-total">{formatPrice(item.price * item.quantity)}</strong>
              </article>
            );
          })}
          <Link to="/products" className="back-to-shop">← Continue shopping</Link>
        </div>

        <aside className="order-summary">
          <p className="eyebrow">The overview</p>
          <h2>Order summary</h2>
          <div className="summary-row"><span>Subtotal ({totalItems} items)</span><span>{formatPrice(totalPrice)}</span></div>
          <div className="summary-row"><span>Shipping</span><span className="free-shipping">Free</span></div>
          <div className="summary-row"><span>Taxes</span><span>Included</span></div>
          <div className="summary-divider"></div>
          <div className="summary-total"><span>Total</span><strong>{formatPrice(totalPrice)}</strong></div>
          <button className="button checkout-button" type="button" onClick={function () { navigate("/checkout"); }}>Continue to checkout ↗</button>
          <p className="secure-note">♡ A little care in every order.</p>
        </aside>
      </div>
    </section>
  );
}

export default Cart;