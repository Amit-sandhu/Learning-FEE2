import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

// Validate checkout details and show a local demo confirmation.
function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(function (state) {
    return state.cart.items;
  });
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: ""
  });
  const [formError, setFormError] = useState("");

  const totalPrice = cartItems.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);

  function handleInputChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormValues(function (previousValues) {
      return {
        ...previousValues,
        [fieldName]: fieldValue
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formValues.fullName.trim() === "" || formValues.email.trim() === "" ||
        formValues.address.trim() === "" || formValues.city.trim() === "" ||
        formValues.postalCode.trim() === "") {
      setFormError("Please complete every field before placing your order.");
      return;
    }

    if (!formValues.email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (cartItems.length === 0) {
      setFormError("Your cart is empty. Add a product before checkout.");
      return;
    }

    setFormError("");
    dispatch(clearCart());
    navigate("/checkout/success", {
      state: {
        customerName: formValues.fullName,
        orderTotal: totalPrice
      },
      replace: true
    });
  }

  if (cartItems.length === 0) {
    return (
      <section className="page-section">
        <div className="empty-state">
          <span className="empty-icon">♡</span>
          <h2>Nothing to check out yet</h2>
          <p>Add a few favourites to your cart first.</p>
          <Link to="/products" className="button">Browse products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="section-heading">
        <div><p className="eyebrow">Almost yours</p><h1>Checkout</h1></div>
        <p className="section-description">This is a demo checkout. It does not take payment or send an order.</p>
      </div>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <h2>Delivery details</h2>
          <div className="form-grid">
            <label className="form-field full-field">Full name
              <input name="fullName" value={formValues.fullName} onChange={handleInputChange} autoComplete="name" placeholder="Your name" />
            </label>
            <label className="form-field full-field">Email address
              <input name="email" type="email" value={formValues.email} onChange={handleInputChange} autoComplete="email" placeholder="you@example.com" />
            </label>
            <label className="form-field full-field">Street address
              <input name="address" value={formValues.address} onChange={handleInputChange} autoComplete="street-address" placeholder="House number and street" />
            </label>
            <label className="form-field">City
              <input name="city" value={formValues.city} onChange={handleInputChange} autoComplete="address-level2" placeholder="Your city" />
            </label>
            <label className="form-field">PIN code
              <input name="postalCode" value={formValues.postalCode} onChange={handleInputChange} inputMode="numeric" autoComplete="postal-code" placeholder="000000" />
            </label>
          </div>
          {formError !== "" && <p className="form-error" role="alert">{formError}</p>}
          <button className="button checkout-button" type="submit">Place demo order ↗</button>
          <button className="text-button" type="button" onClick={function () { navigate("/cart"); }}>Return to cart</button>
        </form>
        <aside className="order-summary checkout-summary">
          <p className="eyebrow">Your selection</p>
          <h2>Order summary</h2>
          {cartItems.map(function (item) {
            return <div className="checkout-item" key={item.id}><span>{item.name} <small>× {item.quantity}</small></span><strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong></div>;
          })}
          <div className="summary-divider"></div>
          <div className="summary-total"><span>Total</span><strong>₹{totalPrice.toLocaleString("en-IN")}</strong></div>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;